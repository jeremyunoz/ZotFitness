// lib
#include <Wire.h>

// files
#include "tempHumSensor.h"
#include "pulseSensor.h"
#include "oled.h"
#include "esp32.h"

#define SDA_PIN 8
#define SCL_PIN 9

// var
Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);
// MAX30105 particleSensor;
WiFiClientSecure net = WiFiClientSecure();
MQTTClient client = MQTTClient(256);

float temperature, humid;
int heartRate = 80;
int oxygen;

void setup() {
  Wire.begin(SDA_PIN, SCL_PIN);
  Serial.begin(115200);
  configureWifi();
  setupTime();
  setupAHT20();
  setupOLED();
  drawLogo();

  IPAddress ip = WiFi.localIP();
  
  connectAWS(net, client);
}

void loop() {
  temperature = getTemperature();
  humid = getHumidity();
  heartRate = getRealisticHeartRate(heartRate);
  oxygen = random(95, 101);;
  Serial.println("------Collecting Data------");
  Serial.print("Temperature: ");
  Serial.print(temperature);
  Serial.println("C");
  Serial.print("Humidity: ");
  Serial.print(humid);
  Serial.println("%");
  Serial.print("Oxygen: ");
  Serial.print(oxygen);
  Serial.println("%");
  Serial.print("heart Rate: ");
  Serial.print(heartRate);
  Serial.println("bpm");

  publishMessage(client, temperature, oxygen, humid, heartRate);
  client.loop();
  delay(10000);
}
