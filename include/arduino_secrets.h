// arduino_secrets.h
#ifndef _ARDUINO_SECRETS_H_
#define _ARDUINO_SECRETS_H_

extern const char* ssid;
extern const char* pass;

// aws information
const char MQTT_TOPIC[]  = "fitnessData"; 
const char AWS_IOT_ENDPOINT[] = "your end-point"; // need to modify based on your AWS IoT Core


// MQTT Client ID 
const char clientId[] = "esp32";  // need to modify based on your AWS IoT Core

// MQTT Topics
const char publishTopic[] = "fitnessData";         // Topic to publish your data (e.g., heart rate, temperature)
const char subscribeTopic[] = "fitnessCommands"; // Topic to listen to, if any


// Device Certificate
static const char AWS_CERT_CRT[] = R"KEY(
-----BEGIN CERTIFICATE-----
//add your own Device Certificate
-----END CERTIFICATE-----
)KEY";

// Device Private Key
static const char AWS_CERT_PRIVATE[] = R"KEY(
-----BEGIN RSA PRIVATE KEY-----
//add your own Device Private Key
-----END RSA PRIVATE KEY-----
)KEY";

// Amazon Root CA 1
static const char AWS_CERT_CA[] = R"EOF(
-----BEGIN CERTIFICATE-----
//add your own Amazon Root CA 1 certificate
-----END CERTIFICATE-----
)EOF";

#endif
