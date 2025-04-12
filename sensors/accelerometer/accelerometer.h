#ifndef _ACCELOROMETER_H_
#define _ACCELOROMETER_H_

#include <Wire.h>
#include <Adafruit_LIS3MDL.h>
#include <Adafruit_Sensor.h>

Adafruit_LIS3MDL lis3mdl;
#define LIS3MDL_CLK 13
#define LIS3MDL_MISO 12
#define LIS3MDL_MOSI 11
#define LIS3MDL_CS 10

void setupAccelerometer(void);

void readAcclerometer(void);

#endif //EOF acclerometer.h