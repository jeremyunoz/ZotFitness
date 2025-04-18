#include "tempHumSensor.h"

Adafruit_AHTX0 aht;
Adafruit_Sensor *aht_humidity, *aht_temp;
sensors_event_t temp;
sensors_event_t humidity;

void setupAHT20() {
    while (!Serial)
        delay(10); // will pause Zero, Leonardo, etc until serial console opens

    Serial.println("Adafruit AHT10/AHT20 test!");

    if (!aht.begin()) {
        Serial.println("Failed to find AHT10/AHT20 chip");
        while (1) {
        delay(10);
        }
    }

    Serial.println("AHT10/AHT20 Found!");
    aht_temp = aht.getTemperatureSensor();
    aht_temp->printSensorDetails();

    aht_humidity = aht.getHumiditySensor();
    aht_humidity->printSensorDetails();
}

float getTemperature(){
    // Get humidity and temperature readings
    aht_temp->getEvent(&temp);
    return temp.temperature;
}

float getHumidity(){
    // Get humidity and temperature readings
    aht_humidity->getEvent(&humidity);
    return humidity.relative_humidity;
}

