#include "OLED.h"

void setupOLED(){
    Serial.println("Testing SSD1306 Display...");
    if(!display.begin(SSD1306_SWITCHCAPVCC, SCREEN_ADDRESS)) {
        Serial.println(F("SSD1306 allocation failed"));
        for(;;); // Don't proceed, loop forever
  }

    Serial.println("SSD1306 connection successes!");
    display.clearDisplay();
    display.setTextSize(2);
    display.setTextColor(WHITE);
    display.setCursor(0, 0);
    display.println("Welcome");
    display.display();
    delay(2000); // Pause for 2 seconds
}

void printOLED(int temp, int humid, int HeartRate){
    String tempStr = String(temp);
    String humidStr = String(humid);
    String heartRateStr = String(HeartRate);

    display.clearDisplay();
    display.setTextSize(1);
    display.setTextColor(WHITE);
    display.setCursor(0, 0);
    display.println("Temp: " + tempStr);
    display.println("Humidity: " + humidStr);
    display.println("HeartRate: " + heartRateStr);
    display.display();
} 



