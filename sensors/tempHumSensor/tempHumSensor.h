#ifndef _TEMPHUMSENSOR_H_
#define _TEMPHUMSENSOR_H_

#include <Adafruit_AHTX0.h>

extern Adafruit_AHTX0 aht;
extern Adafruit_Sensor *aht_humidity, *aht_temp;

void setupAHT20();

int getTemperature();

int getHumidity();

#endif
