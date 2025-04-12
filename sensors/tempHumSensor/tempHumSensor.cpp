#include "tempHumSensor.h"

void setupATHT20() {
    Serial.begin(115200);
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

int getTemperature(){
    // Get humidity and temperature readings
    sensors_event_t temp;
    aht_temp->getEvent(&temp);
    Serial.print("Temperature: ");
    Serial.print(temp.temperature);
    Serial.println("C");
    return temp.temperature;
}

int getHumidity(){
    // Get humidity and temperature readings
    sensors_event_t humidity;
    aht_humidity->getEvent(&humidity);
    Serial.print("Humidity: ");
    Serial.print(humidity.relative_humidity);
    Serial.println("%");
    return humidity.relative_humidity;
}

