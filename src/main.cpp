// lib
#include <Wire.h>

// files
#include "tempHumSensor.h"
#include "oled.h"
#include "arduinoR4.h"

#define SDA_PIN 8
#define SCL_PIN 9

// var
Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);
WiFiClientSecure net = WiFiClientSecure();
MQTTClient client = MQTTClient(256);

float temperature, humid, heartRate, oxygen;

void setup() {
  Wire.begin(SDA_PIN, SCL_PIN);
  Serial.begin(115200);
  configureWifi();
  setupAHT20();
  setupOLED();

  display.clearDisplay();
  display.setTextSize(1);
  display.setTextColor(WHITE);
  display.setCursor(0, 0);
  IPAddress ip = WiFi.localIP();
  display.display();
  
  connectAWS(net, client);
}

void loop() {
  temperature = getTemperature();
  humid = getHumidity();
  heartRate = 15;
  oxygen = 76;
  Serial.println("------Collecting Data------");
  Serial.println(temperature);
  Serial.println(humid);

  printOLED(temperature, humid, 100);
  publishMessage(client, temperature, heartRate, humid, oxygen);
  client.loop();
  delay(1000);
}
