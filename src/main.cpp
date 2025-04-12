// lib
#include "tempHumSensor.h"

// var

void setup() {
  Serial.begin(9600);
  setupAHT20();
}

void loop() {
  int temperature = getTemperature();
  int humidity = getHumidity();
  Serial.println(temperature);
  Serial.println(humidity);
  delay(2000);
}
