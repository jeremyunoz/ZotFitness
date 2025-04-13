#include "OLED.h"

void setupOLED(){
    Serial.println("Testing SSD1306 Display...");
    if(!display.begin(SSD1306_SWITCHCAPVCC, SCREEN_ADDRESS)) {
        Serial.println(F("SSD1306 allocation failed"));
        for(;;); // Don't proceed, loop forever
    }

    Serial.println("SSD1306 connection successes!");
    display.clearDisplay();
    display.setTextSize(1);
    display.setTextColor(WHITE);
    display.setCursor(0, 0);
    display.println("Welcome...");
    display.display();
    delay(2000); // Pause for 2 seconds
}

void printOLED(int temp, int humid, int HeartRate){
    display.clearDisplay();
    //display.setFont(&FreeMono9pt7b);
    display.setTextSize(1);
    display.setTextColor(WHITE);
    display.setCursor(20, 0);

    displayData(temp,humid,HeartRate,20,12);

    displayIcons(113);
    display.display();
}

void displayData(int temp, int humid, int HeartRate, int x, int y){
    display.setCursor(x, 0);
    display.print("Humidity: ");
    display.print(String(humid));
    display.println(" %");
    display.setCursor(x, y);
    display.print("Temp: ");
    display.print(String(temp));

    //draw °C
    display.drawCircle(x+60, y, 1, WHITE);
    display.drawCircle(x+67, y+3, 4, WHITE);
    display.fillCircle(x+70,y+3, 2, BLACK);
    display.setCursor(x, 2*y);
    display.print("HR: ");
    display.print(String(HeartRate));
    display.println(" bpm");
}

void displayIcons(int x){
    //draw heart
    display.fillCircle(x-2, 26, 2, WHITE);
    display.fillCircle(x+2, 26, 2, WHITE);
    display.fillTriangle(x-4, 26, x+4, 25, x, 30, WHITE);

    //draw water drop
    display.fillCircle(x, 4, 2, WHITE);
    display.fillTriangle(x-2, 5, x+2, 5, x, 0, WHITE);

    //draw thermometer
    display.drawCircle(x, 17, 3, WHITE);
    display.drawRoundRect(x-2, 11, 5, 7, 1, WHITE);
    display.fillCircle(x, 17, 2, BLACK);
    display.fillRoundRect(x-1, 12, 3, 6, 1, BLACK);
    display.drawLine(x-7, 11, x-5, 11, WHITE);
    display.drawLine(x-7, 13, x-5, 13, WHITE);
    display.drawLine(x-7, 15, x-5, 15, WHITE);
    display.drawCircle(x, 18, 1, WHITE);
    display.drawLine(x, 17, x, 13, WHITE);
}
