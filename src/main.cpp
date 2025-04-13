// lib
#include <Wire.h>

// files
#include "tempHumSensor.h"
#include "oled.h"
#include "esp32.h"

#define SDA_PIN 8
#define SCL_PIN 9

// var
Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);
// MAX30105 particleSensor;
WiFiClientSecure net = WiFiClientSecure();
MQTTClient client = MQTTClient(256);

float temperature, humid, heartRate, oxygen;

void setup() {
  Wire.begin(SDA_PIN, SCL_PIN);
  Serial.begin(115200);
  configureWifi();
  setupTime();
  setupAHT20();
  setupOLED();

  IPAddress ip = WiFi.localIP();
  
  connectAWS(net, client);
}

void loop() {
  temperature = getTemperature();
  humid = getHumidity();
  heartRate = 85;
  oxygen = 85;
  Serial.println("------Collecting Data------");
  Serial.print("Temperature: ");
  Serial.print(temperature);
  Serial.println("C");
  Serial.print("Humidity: ");
  Serial.print(humid);
  Serial.println("%");

  printOLED(temperature, humid, heartRate);
  publishMessage(client, temperature, oxygen, humid, heartRate);
  client.loop();
  delay(10000);
}
