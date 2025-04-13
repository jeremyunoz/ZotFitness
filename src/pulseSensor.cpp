#include "pulseSensor.h"

static const byte RATE_SIZE = 4;
static byte rates[RATE_SIZE];
static byte rateSpot = 0;
static long lastBeat = 0;
static float beatsPerMinute = 0;
static int beatAvg = 0;

// === Setup Function ===
int getRealisticHeartRate(int prevHR) {
  int variation = random(-3, 4); // small fluctuation
  int hr = prevHR + variation;

  // Add a chance for elevated heart rate (e.g., 10% of the time)
  if (random(0, 100) < 10) {
    hr = random(100, 140);
  }

  // Clamp heart rate to stay in healthy range
  hr = constrain(hr, 60, 140);

  return hr;
}

void setupHeartSensor(MAX30105& particleSensor) {
  Serial.println("Initializing MAX30105...");

  if (!particleSensor.begin(Wire, I2C_SPEED_FAST)) {
    Serial.println("MAX30105 not found. Check wiring/power.");
    while (1);
  }

  particleSensor.setup(); 
  particleSensor.setPulseAmplitudeRed(0x0A);  // Low red LED to indicate sensor is running
  particleSensor.setPulseAmplitudeGreen(0);   // Turn off green LED

  Serial.println("Place your index finger on the sensor with steady pressure.");
}

// === Getter for IR Value ===
long getIRValue(MAX30105& particleSensor) {
  return particleSensor.getIR();
}

// === Update BPM based on beat detection ===
void updateHeartRate(MAX30105& particleSensor) {
  long irValue = getIRValue(particleSensor);

  if (checkForBeat(irValue)) {
    long delta = millis() - lastBeat;
    lastBeat = millis();
    beatsPerMinute = 60.0 / (delta / 1000.0);

    if (beatsPerMinute > 20 && beatsPerMinute < 255) {
      rates[rateSpot++] = (byte)beatsPerMinute;
      rateSpot %= RATE_SIZE;

      beatAvg = 0;
      for (byte i = 0; i < RATE_SIZE; i++) {
        beatAvg += rates[i];
      }
      beatAvg /= RATE_SIZE;
    }
  }

  // Debug output
  Serial.print("IR=");
  Serial.print(irValue);
  Serial.print(", BPM=");
  Serial.print(beatsPerMinute);
  Serial.print(", Avg BPM=");
  Serial.print(beatAvg);
  if (irValue < 50000) Serial.print(" No finger?");
  Serial.println();
}

// === Getters for BPM and Avg BPM ===
float getBPM() {
  return beatsPerMinute;
}

int getAvgBPM() {
  return beatAvg;
}