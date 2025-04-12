// lib
#include <Wire.h>

// files
#include "tempHumSensor.h"
#include "oled.h"
#include "arduinoR4.h"

// var
Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);
int temperature, humid;

void setup() {
  Serial.begin(9600);
  configureArduinoWifi();
  setupAHT20();
  setupOLED();

  display.clearDisplay();
  display.setTextSize(1);
  display.setTextColor(WHITE);
  display.setCursor(0, 0);
  IPAddress ip = WiFi.localIP();
  display.print("IP Address: ");
  display.println(ip);
  display.display();
  delay(2000);
}

void loop() {
  temperature = getTemperature();
  humid = getHumidity();
  Serial.println("------Collecting Data------");
  Serial.println(temperature);
  Serial.println(humid);

  printOLED(temperature, humid, 100);
}
