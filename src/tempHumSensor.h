#ifndef _TEMPHUMSENSOR_H_
#define _TEMPHUMSENSOR_H_

#include <Adafruit_AHTX0.h>

void setupAHT20();

int getTemperature();

int getHumidity();

#endif
