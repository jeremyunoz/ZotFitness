#ifndef _PULSESENSOR_H_
#define _PULSESENSOR_H_

#include "MAX30105.h"
#include "heartRate.h"

void setupHeartSensor(MAX30105& particleSensor);

long getIRValue(MAX30105& particleSensor);

void updateHeartRate(MAX30105& particleSensor);

float getBPM();

int getAvgBPM();

#endif
