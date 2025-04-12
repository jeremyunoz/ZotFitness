// lib
#include <Wire.h>

// files
#include "tempHumSensor.h"
#include "oled.h"

// var
Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);
int temperature, humidity;

void setup() {
  Serial.begin(9600);
  setupAHT20();
  setupOLED();
  display.clearDisplay();
}

void loop() {
  temperature = getTemperature();
  humidity = getHumidity();
  Serial.println(temperature);
  Serial.println(humidity);

  printOLED(temperature, humidity, 100);
  delay(3000);
}
