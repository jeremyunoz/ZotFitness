#include "arduinoR4.h"

const char*  ssid = "BitHacks";
const char*  pass = "BitHacks2025!";
const char* thingName = "arduinoR4WiFi";
const int port = 8883;

int status = WL_IDLE_STATUS;

void printWiFiStatus() {
  Serial.print("SSID: ");
  Serial.println(WiFi.SSID());

  IPAddress ip = WiFi.localIP();
  Serial.print("IP Address: ");
  Serial.println(ip);

  Serial.print("To see this page in action, open a browser to http://");
  Serial.println(ip);
}

void configureWifi() {
    while (!Serial) { delay(10); }

    Serial.println("Connecting to WiFi...");

    WiFi.mode(WIFI_STA);  // Set to station mode
    WiFi.begin(ssid, pass);

    // Wait for connection
    while (WiFi.status() != WL_CONNECTED) {
        Serial.print(".");
        delay(500);
    }

    Serial.println("\nConnected to WiFi!");
    printWiFiStatus();
}

void connectAWS(WiFiClientSecure& net, MQTTClient& client) {
    // Configure WiFiClientSecure to use the AWS IoT device credentials
    net.setCACert(AWS_CERT_CA);
    net.setCertificate(AWS_CERT_CRT);
    net.setPrivateKey(AWS_CERT_PRIVATE);

    client.begin(AWS_IOT_ENDPOINT, 8883, net);

    // Create a message handler
    client.onMessage(messageHandler);

    Serial.println("\nConnecting to AWS IoT...");

    while (!client.connect(THINGNAME)) {
        Serial.print(".");
        delay(100);
    }

    if(!client.connected()){
        Serial.println("AWS IoT Timeout!");
        return;
    }

    // Subscribe to a topic
    client.subscribe(subscribeTopic);

    Serial.println("AWS IoT Connected!");
}

void publishMessage(MQTTClient &client, float temp, float oxy, float humid, float heartRate)
{
  StaticJsonDocument<200> doc;

  doc["oxygen"] = oxy;
  doc["heartRate"] = heartRate;
  doc["temperature"] = temp;
  doc["humidity"] = humid;

  char jsonBuffer[512];
  serializeJson(doc, jsonBuffer); 

  // Publish to AWS IoT
  if (client.publish(publishTopic, jsonBuffer)) {
    Serial.println("Message published successfully");
  } else {
    Serial.println("Message failed to publish");
  }
}


void messageHandler(String &topic, String &payload) {
  Serial.println("incoming: " + topic + " - " + payload);

//  StaticJsonDocument<200> doc;
//  deserializeJson(doc, payload);
//  const char* message = doc["message"];
}


