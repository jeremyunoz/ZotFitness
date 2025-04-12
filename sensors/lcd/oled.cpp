#include <OLED.h>

void setupOLED(){
    if(!display.begin(SSD1306_SWITCHCAPVCC)) {
        Serial.println(F("SSD1306 allocation failed"));
        for(;;); // Don't proceed, loop forever
    }
}
void printOLED(String temp, String humid, String Steps, String HeartRate){
    display.println("Temperature: " + temp + "degrees C Humidity: " + humid + "% rH\nSteps: " + Steps + "HeartRate: " + bpm + " bpm");
} 

