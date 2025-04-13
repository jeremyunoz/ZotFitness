#ifndef _ARDUINOR4_H_
#define _ARDUINOR4_H_

// files
#include "arduino_secrets.h"

#include <ArduinoJson.h>
#include <MQTT.h>
#include <WiFi.h> 
#include <pgmspace.h>
#include <WiFiClientSecure.h>

#define THINGNAME "esp32"

// print current wifi status
void printWiFiStatus();

// set up arduino wifi 
void configureWifi();    

void messageHandler(String &topic, String &payload);

// set up AWS IoT connection
void connectAWS(WiFiClientSecure& net, MQTTClient& client);

void publishMessage(MQTTClient &client, float temp, float oxy, float humid, float heartRate);

void messageHandler(String &topic, String &payload);

#endif