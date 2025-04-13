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

void drawLogo() {
  display.clearDisplay();
  display.drawBitmap(
    (display.width()  - LOGO_WIDTH ) / 2,
    (display.height() - LOGO_HEIGHT) / 2,
    petr_bmp, LOGO_WIDTH, LOGO_HEIGHT, 1);
  
  display.fillRect(0, 27, 128, 5, WHITE);
  display.setTextSize(1);
  display.setTextColor(BLACK);
  display.setCursor(30, 26);
  display.display();
  delay(1000);
}
