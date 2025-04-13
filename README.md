# ZotFitness 💪

ZotFitness is a health-focused embedded IoT system designed to help users monitor their physical condition in real time. By collecting and analyzing data such as heart rate, temperature, humidity, and blood oxygen, ZotFitness provides personalized insights to support healthier habits and lifestyles.

## 🧩 Components

| Part                   | Description                                                        |
| ---------------------- | ------------------------------------------------------------------ |
| **Pulse Sensor**       | Measures heart rate (BPM) and blood oxygen levels.                |
| **OLED Display**       | Displays the team logo ("Zot!!!").              |
| **AHT20**              | Senses ambient temperature and humidity.                           |
| **ESP32-S3-DevKitC-1** | WiFi-enabled MCU that powers the system and handles communication. |

## 📦 Features

- ✅ Real-time **heart rate & SpO2 monitoring**
- 🌡️ Ambient **temperature and humidity tracking**
- 🌐 Live **data visualization** on an intuitive Web UI
- ☁️ **Cloud data storage** using **AWS IoT Core** and **DynamoDB**
- 🤖 Integrated **AI assistant (Gemini)** to provide health insights and suggestions

## 🧠 AI + Cloud Integration

- **Gemini AI** is embedded in the Web UI to interpret sensor trends and offer personalized fitness or wellness tips.
- Data collected from sensors is transmitted securely through **AWS IoT Core** and stored in **DynamoDB**, enabling scalable, real-time access for both users and the AI.

## 📚 References

- **ESP32-S3-DevKitC-1**  
  [Hardware Reference Guide](https://docs.espressif.com/projects/esp-dev-kits/en/latest/esp32s3/esp32-s3-devkitc-1/user_guide.html#hardware-reference)

- **Adafruit AHT20 Temperature & Humidity Sensor**  
  [Arduino Guide](https://learn.adafruit.com/adafruit-aht20/arduino)

- **SparkFun MAX3010x Pulse and Proximity Sensor**  
  [PlatformIO Library](https://registry.platformio.org/libraries/sparkfun/SparkFun%20MAX3010x%20Pulse%20and%20Proximity%20Sensor%20Library)

- **OLED Display**  
  [Arduino Guide by Random Nerd Tutorials](https://randomnerdtutorials.com/guide-for-oled-display-with-arduino/)

## Running Frontend
- cd into frontend
```
npm i
```
```
npm i axios
```
```
npm i react-router-dom
```
```
npm i react-router-dom
```
```
npm i @google/generative-ai@0.8.0
```

## Running DynamoDB
- cd into DynamoDB
```
fastapi run main.py
```
