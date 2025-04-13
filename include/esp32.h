#ifndef _ESP32_H_
#define _ESP32_H_

// files
#include "arduino_secrets.h"

#include <ArduinoJson.h>
#include <MQTT.h>
#include <WiFi.h> 
#include <pgmspace.h>
#include "time.h"
#include <WiFiClientSecure.h>

#define THINGNAME "esp32"

// print current wifi status
void printWiFiStatus();

// set up arduino wifi 
void configureWifi();    

void messageHandler(String &topic, String &payload);

// set up AWS IoT connection
void connectAWS(WiFiClientSecure& net, MQTTClient& client);

void publishMessage(MQTTClient &client, float temp, int oxy, float humid, int heartRate);

void messageHandler(String &topic, String &payload);

void setupTime();

#endif