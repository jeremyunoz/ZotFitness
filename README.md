# ZotFitness 💪

ZotFitness is a health-focused embedded IoT system designed to help users monitor their physical condition in real time. By collecting and analyzing data such as heart rate, temperature, humidity, and blood oxygen, ZotFitness provides personalized insights to support healthier habits and lifestyles.

## 🧩 Components

| Part                   | Description                                                        |
| ---------------------- | ------------------------------------------------------------------ |
| **PulseSensor**        | Measures heart rate (BPM).                                         |
| **OLED Screens**       | Displays team logo: Zot!!!                                         |
| **AHT20**              | Senses ambient temperature and humidity.                           |
| **ESP32-S3-DevKitC-1** | WiFi-enabled MCU that powers the system and handles communication. |

## 📦 Features

-  Real-time **heart rate monitoring**
-  Ambient **temperature and humidity tracking**
-  **Motion/activity detection** using accelerometer
-  Live data visualization on **Web UI**
-  Future support for **cloud integration** and AI-based health feedbacks

## References

- **ESP32-S3-DevKitC-1**  
  [Hardware Reference Guide](https://docs.espressif.com/projects/esp-dev-kits/en/latest/esp32s3/esp32-s3-devkitc-1/user_guide.html#hardware-reference)

- **Adafruit AHT20 Temperature & Humidity Sensor**  
  [Arduino Guide](https://learn.adafruit.com/adafruit-aht20/arduino)

- **SparkFun MAX3010x Pulse and Proximity Sensor**  
  [PlatformIO Library](https://registry.platformio.org/libraries/sparkfun/SparkFun%20MAX3010x%20Pulse%20and%20Proximity%20Sensor%20Library)

- **OLED Display**  
  [Arduino Guide by Random Nerd Tutorials](https://randomnerdtutorials.com/guide-for-oled-display-with-arduino/)
