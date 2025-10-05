// --------------- Xylophone (technically Marimba) team code -------------------------
// This was mainly developed by Asher Leavitt with aid throughout from Brendan.
// It utalizes the example servo code with smaller delay times. The smaller the delay,
// the shoerter the swing of each mallet. This allowes us to tune each note as seen 
// below
// -----------------------------------------------------------------------------------

#define ONEmS_COUNTS ((1 << 12) * 50 / 1000)  // 2^12 bit resolution * freq / 1000 (ms/

//Each note channel and their specific delay time to ensure best hit every time

#define note_F1 1, 140
#define note_G1 2, 110
#define note_A1 3, 170
#define note_B_flat 4, 170
#define note_B 5, 170
#define note_C 6, 170
#define note_D 7, 110
#define note_E 0, 150
#define note_F2 8, 140
#define note_G2 9, 170
#define note_A2 10, 165


#include <WiFi.h>
#include <WiFiUdp.h>
WiFiUDP UDPServer;

// const char* ssid     = "TP-Link_05AF";
// const char* password = "47543454";

const char* ssid = "TP-Link_E0C8";
const char* password = "52665134";

uint32_t timebase;
int currentNote = 0;

int min_counts;
int max_counts;

//We Care A Lot
const int midi_notes[] = { 64, 59, 62, 64, 57, 62, 62, 62, 64, 62, 57, 57, 55, 55, 55, 53, 55, 55, 62, 62, 62, 64, 62, 57, 57, 55, 55, 55, 53, 55, 55, 53, 62, 62, 62, 64, 62, 57, 57, 55, 55, 55, 55, 55, 57, 62, 62, 62, 64, 62, 57, 57, 55, 55, 55, 53, 55, 55, 55, 53, 62, 62, 62, 64, 62, 57, 57, 55, 55, 55, 53, 55, 55, 55, 53, 62, 62, 62, 64, 62, 57, 57, 55, 55, 55, 53, 55, 55, 53, 62, 62, 62, 64, 62, 57, 57, 55, 55, 55, 53, 55, 55, 53, 62, 62, 62, 64, 62, 57, 57, 55, 55, 55, 53, 55, 55, 55, 53, 62, 62, 62, 64, 62, 64, 62, 64, 62, 64, 62, 64, 65, 62, 62, 62, 64, 62, 57, 57, 55, 55, 55, 53, 55, 55, 62, 62, 62, 64, 62, 57, 57, 55, 55, 55, 53, 55, 55, 53, 62, 62, 62, 64, 62, 57, 57, 55, 55, 55, 53, 55, 55, 55, 53, 62, 62, 62, 64, 62, 57, 57, 55, 55, 55, 53, 55, 55, 53, 62, 62, 62, 64, 62, 57, 57, 55, 55, 55, 53, 55, 55, 62, 62, 62, 64, 62, 57, 57, 55, 55, 55, 53, 55, 55, 53, 62, 62, 62, 64, 62, 57, 57, 55, 55, 55, 53, 55, 55, 55, 53, 62, 62, 62, 64, 62, 57, 57, 55, 55, 55, 53, 55, 55, 53, 62, 62, 62, 64, 62, 57, 57, 55, 55, 55, 53, 55, 55, 62, 62, 62, 64, 62, 57, 57, 55, 55, 55, 53, 55, 55, 53, 62, 62, 62, 64, 62, 57, 57, 55, 55, 55, 53, 55, 55, 55, 53, 62, 62, 62, 64, 62, 57, 57, 55, 55, 55, 53, 55, 55, 53, 62, 62, 62, 64, 62, 57, 57, 55, 55, 55, 53, 55, 55, 53 };
const float start_times[] = { 62.2019, 62.4771, 62.7523, 63.0276, 63.578, 64.1285, 64.4037, 64.6789, 64.9542, 65.2294, 65.5046, 65.7799, 66.0551, 66.3303, 66.6055, 66.8808, 67.156, 67.4312, 72.9358, 73.211, 73.4863, 73.7615, 74.0367, 74.312, 74.5872, 74.8624, 75.1377, 75.4129, 75.6881, 75.9633, 76.2386, 76.789, 114.7707, 115.0459, 115.3212, 115.5964, 115.8716, 116.1468, 116.4221, 116.6973, 116.9725, 117.2478, 117.523, 117.7982, 118.0735, 119.1744, 119.4496, 119.7248, 120.0001, 120.2753, 120.5505, 120.8258, 121.101, 121.3762, 121.6514, 121.9267, 122.2019, 122.4771, 122.7524, 123.0276, 123.578, 123.8533, 124.1285, 124.4037, 124.679, 124.9542, 125.2294, 125.5047, 125.7799, 126.0551, 126.3303, 126.6056, 126.8808, 127.156, 127.4313, 127.9817, 128.2569, 128.5322, 128.8074, 129.0826, 129.3579, 129.6331, 129.9083, 130.1836, 130.4588, 130.734, 131.0092, 131.2845, 131.8349, 132.3854, 132.6606, 132.9358, 133.2111, 133.4863, 133.7615, 134.0368, 134.312, 134.5872, 134.8625, 135.1377, 135.4129, 135.6881, 136.2386, 136.7891, 137.0643, 137.3395, 137.6148, 137.89, 138.1652, 138.4404, 138.7157, 138.9909, 139.2661, 139.5414, 139.8166, 140.0918, 140.367, 140.6423, 141.1927, 141.468, 141.7432, 142.0184, 142.2937, 142.5689, 142.8441, 143.1193, 143.3946, 143.6698, 143.945, 144.2203, 144.4955, 145.5964, 145.8716, 146.1469, 146.4221, 146.6973, 146.9726, 147.2478, 147.523, 147.7982, 148.0735, 148.3487, 148.6239, 148.8992, 187.4313, 187.7065, 187.9817, 188.257, 188.5322, 188.8074, 189.0827, 189.3579, 189.6331, 189.9084, 190.1836, 190.4588, 190.734, 191.2845, 191.835, 192.1102, 192.3854, 192.6607, 192.9359, 193.2111, 193.4863, 193.7616, 194.0368, 194.312, 194.5873, 194.8625, 195.1377, 195.4129, 195.6882, 196.2386, 196.5139, 196.7891, 197.0643, 197.3396, 197.6148, 197.89, 198.1652, 198.4405, 198.7157, 198.9909, 199.2662, 199.5414, 200.0918, 200.6423, 200.9175, 201.1928, 201.468, 201.7432, 202.0185, 202.2937, 202.5689, 202.8441, 203.1194, 203.3946, 203.6698, 203.9451, 205.046, 205.3212, 205.5964, 205.8717, 206.1469, 206.4221, 206.6974, 206.9726, 207.2478, 207.523, 207.7983, 208.0735, 208.3487, 208.8992, 209.4496, 209.7249, 210.0001, 210.2753, 210.5506, 210.8258, 211.101, 211.3763, 211.6515, 211.9267, 212.2019, 212.4772, 212.7524, 213.0276, 213.3029, 213.8533, 214.1286, 214.4038, 214.679, 214.9542, 215.2295, 215.5047, 215.7799, 216.0552, 216.3304, 216.6056, 216.8808, 217.1561, 217.7065, 218.257, 218.5322, 218.8075, 219.0827, 219.3579, 219.6331, 219.9084, 220.1836, 220.4588, 220.7341, 221.0093, 221.2845, 221.5597, 222.6607, 222.9359, 223.2111, 223.4864, 223.7616, 224.0368, 224.312, 224.5873, 224.8625, 225.1377, 225.413, 225.6882, 225.9634, 226.5139, 227.0643, 227.3396, 227.6148, 227.89, 228.1653, 228.4405, 228.7157, 228.9909, 229.2662, 229.5414, 229.8166, 230.0919, 230.3671, 230.6423, 230.9176, 231.468, 231.7432, 232.0185, 232.2937, 232.5689, 232.8442, 233.1194, 233.3946, 233.6698, 233.9451, 234.2203, 234.4955, 234.7708, 235.3212, 235.8717, 236.1469, 236.4221, 236.6974, 236.9726, 237.2478, 237.5231, 237.7983, 238.0735, 238.3487, 238.624, 238.8992, 239.1744, 239.4497 };

//Starmachine2000?
// const int Emidi_notes[] = {53,55,57,60,57,55,64,60,57,64,53,55,57,62,57,64,57,53,55,60,62,57,64,57,58,60,62,64,60,65,60,67,60,69,55,65,64,65,57,57,62,57,62,57,60,60,53,53,55,57,60,60,57,55,65,64,65};
// const float Estart_times[] = {0,0.201,0.402,0.603,1.005,1.206,1.407,1.809,2.412,2.814,3.216,3.417,3.618,3.819,4.221,4.422,4.623,6.432,6.633,6.834,7.035,7.437,7.638,7.839,8.442,8.844,9.246,9.648,9.849,10.05,10.251,10.452,10.653,10.854,11.055,12.261,12.462,12.663,13.065,13.467,13.869,14.07,14.271,14.472,14.673,14.874,15.276,15.879,16.08,16.482,17.085,17.487,17.889,18.09,19.296,19.497,19.698,20.1,20.502,20.703,20.904,21.105,21.306,21.708,22.311,22.512,22.914,23.316,23.517,23.718,23.919,24.12,24.321,24.522,25.728,25.929,26.13,26.331,26.532,26.733};

//StarmachineBetter?
const int Emidi_notes[] = {53,55,57,60,57,55,64,60,57,64,53,55,57,62,57,64,57,53,55,60,62,57,64,57,58,60,62,64,60,65,60,67,60,69,55,65,64,65,57,57,62,57,62,57,60,60,53,53,55,57,60,60,57,55,65,64,65,57,62,57,60,60,53,53,55,57,53,58,53,53,62,64,60,64,60,65,67,65,57,57,62,57,60,60,53,53,55,57,53,58,53,60,53,62,64};
const float Estart_times[] = {0,0.201,0.402,0.603,1.005,1.206,1.407,1.809,2.412,2.814,3.216,3.417,3.618,3.819,4.221,4.422,4.623,6.432,6.633,6.834,7.035,7.437,7.638,7.839,8.442,8.844,9.246,9.648,9.849,10.05,10.251,10.452,10.653,10.854,11.055,12.261,12.462,12.663,13.065,13.467,13.869,14.07,14.271,14.472,14.673,14.874,15.276,15.879,16.08,16.482,17.085,17.487,17.889,18.09,19.296,19.497,19.698,20.1,20.703,20.904,21.105,21.306,21.708,22.311,22.512,22.914,23.316,23.517,23.718,24.12,24.321,24.522,25.728,25.929,26.13,26.331,26.532,26.733,27.135,27.537,27.738,27.939,28.14,28.341,28.743,29.346,29.547,29.949,30.351,30.552,30.753,30.954,31.155,31.356,31.557};

//Demons
const int Dmidi_notes[] = { 60,57,60,53,60,57,60,53,60,57,60,52,60,57,60,52,60,57,60,53,60,57,60,53,60,57,60,53,57,58,57,60,57,60,53,60,57,60,53,60,57,60,52,60,57,60,52,60,57,60,53,60,57,60,53,60 };
const float Dstart_times[] = { 136.4516,136.7741,137.0967,137.4193,137.7419,138.0645,138.387,138.7096,139.0322,139.3548,139.6774,139.9999,140.3225,140.6451,140.9677,141.2903,141.6128,141.9354,142.258,142.5806,142.9032,143.2257,143.5483,143.8709,144.1935,144.5161,144.8386,145.1612,145.4838,145.8064,146.4515,146.7741,147.0967,147.4193,147.7419,148.0644,148.387,148.7096,149.0322,149.3548,149.6774,149.9999,150.3225,150.6451,150.9677,151.2903,151.6128,151.9354,152.258,152.5806,152.9032,153.2257,153.5483,153.8709,154.1935,154.5161};

//ringtone
const int Rmidi_notes[] = {60,58,55,60,53,60,58,60,53,55,55,58,60,60,58,55,60,53,60,58,60,53,55,55,58,60,60,58,55,60,53,60,58,60,53,55,55,58,60};
const float Rstart_times[] = {0.10715,0.2143,0.32145,0.53575,0.75005,0.96435,1.17865,1.39295,1.60725,2.46445,2.89305,3.10735,3.32165,3.53595,3.6431,3.75025,3.96455,4.17885,4.39315,4.60745,4.82175,5.03605,5.89325,6.32185,6.53615,6.75045,6.96475,7.0719,7.17905,7.39335,7.60765,7.82195,8.03625,8.25055,8.46485,9.32205,9.75065,9.96495,10.17925};

//Twincle (we never took a video, but it still works)
// const int Emidi_notes[] = {60,60,67,67,69,69,67,65,65,64,64,62,62,60,67,67,65,65,64,64,62,67,67,65,65,64,64,62,60,60,67,67,69,69,67,65,65,64,64,62,62,60};
// const float Estart_times[] = {0,0.5,1,1.5,2,2.5,3,4,4.5,5,5.5,6,6.5,7,8,8.5,9,9.5,10,10.5,11,12,12.5,13,13.5,14,14.5,15,16,16.5,17,17.5,18,18.5,19,20,20.5,21,21.5,22,22.5,23};
int baseline;


void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  ledcSetup(1, 50, 12);        // Led Initialization - 140
  ledcAttachPin(32, 1);        // GPIO 4 @ channel 1  - F1
  
  ledcSetup(2, 50, 12);        // Led Initialization - 110
  ledcAttachPin(33, 2);        // GPIO 5 @ channel 2  - G1
  
  ledcSetup(3, 50, 12);        // Led Initialization - 170
  ledcAttachPin(25, 3);        // GPIO 6 @ channel 3  - A1
  
  ledcSetup(4, 50, 12);        // Led Initialization - 170
  ledcAttachPin(26, 4);        // GPIO 7 @ channel 4  - B_Flat
  
  ledcSetup(5, 50, 12);        // Led Initialization - 170
  ledcAttachPin(27, 5);        // GPIO 15 @ channel 5  - B

  ledcSetup(6, 50, 12);        // Led Initialization - 130
  ledcAttachPin(14, 6);        // GPIO 16 @ channel 6  - C

  ledcSetup(7, 50, 12);        // Led Initialization - 110
  ledcAttachPin(12, 7);        // GPIO 17 @ channel 7  - D

  ledcSetup(8, 50, 12);        // Led Initialization - 140
  ledcAttachPin(4, 8);        // GPIO 4 @ channel 8  - F2

  ledcSetup(9, 50, 12);        // Led Initialization - 170
  ledcAttachPin(0, 9);        // GPIO 0 @ channel 9  - G2

  ledcSetup(10, 50, 12);        // Led Initialization - 165
  ledcAttachPin(15, 10);        // GPIO 15 @ channel 10  - A2
  
  ledcSetup(0, 50, 12);        // Led Initialization - 150
  ledcAttachPin(13, 0);        // GPIO 13 @ channel 0  - E

  min_counts = ONEmS_COUNTS; 
  max_counts = 2 * ONEmS_COUNTS;

  WiFi.begin(ssid, password);
  WiFi.config(
    IPAddress(192, 168, 1, 75),
    IPAddress(192, 168, 1, 1),
    IPAddress(255, 255, 255, 0));
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("Wifi Connected");

  UDPServer.begin(2808);
  int total;
  testAll(100);

}

int checkUDP() {
  char packetBuffer[100];

  int cb = UDPServer.parsePacket();
  if (cb) {
    int len = UDPServer.read(packetBuffer, 100);
    packetBuffer[len] = 0;
    Serial.printf("%s", packetBuffer);
    if (packetBuffer[0] == 'T') return 1;   // test
    if (packetBuffer[0] == 'G') return 2;   // We Care a Lot
    if (packetBuffer[0] == 'S') return 4;   // Demons
    if (packetBuffer[0] == '!') return 100; // Starmachine2000
    if (packetBuffer[0] == 'R') return 50;  // Apple Ringtone

  }
  return 0;
}

// This is the same code from the example, with some minor tweaks

void hit(int servoChannel, int microDelay) {
  for (int i = min_counts; i < max_counts; i += 1) {
    // mcp1.digitalWrite(0, i); // sweep servo forward
    ledcWrite(servoChannel, i);
    delayMicroseconds(microDelay);  // This is where the tuned delay is played
  }
  for (int i = max_counts; i > min_counts; i -= 1) {
    // mcp1.digitalWrite(0, i); // sweep servo back
    ledcWrite(servoChannel, i);
    delayMicroseconds(microDelay);  // This is where the tuned delay is played
  }

}
#define threshold 6000;
void loop() {
  int msg = checkUDP();
  if (msg == 1) {
    testAll(100);
  } else if (msg == 2) {
    currentNote = 0;
    timebase = millis();
    playWeCare();
  } else if (msg == 4) {
    currentNote = 0;
    timebase = millis();
    playDemons();
  }
  else if (msg == 100) {
    currentNote = 0;
    timebase = millis();
    playExtra();
  }
  else if (msg == 50) {
    currentNote = 0;
    timebase = millis();
    playRingtone();
  }
}
void playWeCare() {
  while (!(currentNote >= sizeof(midi_notes) / sizeof(int)))
  {
    if (millis() - timebase > start_times[currentNote] * 1000) {
    Serial.printf("%dNote %d\n", currentNote, midi_notes[currentNote]);
    if (midi_notes[currentNote] == 64) {
      hit(note_E);
    } else if (midi_notes[currentNote] == 53) {
      hit(note_F1);
    } else if (midi_notes[currentNote] == 55) {
      hit(note_G1);
    } else if (midi_notes[currentNote] == 57) {
      hit(note_A1);
    } else if (midi_notes[currentNote] == 58) {
      hit(note_B_flat);
    } else if (midi_notes[currentNote] == 59) {
      hit(note_B);
    } else if (midi_notes[currentNote] == 60) {
      hit(note_C);
    } else if (midi_notes[currentNote] == 62) {
      hit(note_D);
    } else if (midi_notes[currentNote] == 65) {
      hit(note_F2);
    } else if (midi_notes[currentNote] == 67) {
      hit(note_G2);
    } else if (midi_notes[currentNote] == 69) {
      hit(note_A2);
    }

    currentNote++;
  }
  
  Serial.print("helo" );
  Serial.println(millis() - timebase); // Elapsed time (milliseconds)
  }
}
void playDemons() {
  while (!(currentNote >= sizeof(Dmidi_notes) / sizeof(int)))
  {
    if (millis() - timebase > Dstart_times[currentNote] * 1000) {
    Serial.printf("%dNote %d\n", currentNote, Dmidi_notes[currentNote]);
    if (Dmidi_notes[currentNote] == 64) {
      hit(note_E);
    } else if (Dmidi_notes[currentNote] == 53) {
      hit(note_F1);
    } else if (Dmidi_notes[currentNote] == 55) {
      hit(note_G1);
    } else if (Dmidi_notes[currentNote] == 57) {
      hit(note_A1);
    } else if (Dmidi_notes[currentNote] == 58) {
      hit(note_B_flat);
    } else if (Dmidi_notes[currentNote] == 59) {
      hit(note_B);
    } else if (Dmidi_notes[currentNote] == 60) {
      hit(note_C);
    } else if (Dmidi_notes[currentNote] == 62) {
      hit(note_D);
    } else if (Dmidi_notes[currentNote] == 65) {
      hit(note_F2);
    } else if (Dmidi_notes[currentNote] == 67) {
      hit(note_G2);
    } else if (Dmidi_notes[currentNote] == 69) {
      hit(note_A2);
    }

    currentNote++;
  }
  
  Serial.print("helo" );
  Serial.println(millis() - timebase); // Elapsed time (milliseconds)
  }
}
void playExtra() {
  while (!(currentNote >= sizeof(Emidi_notes) / sizeof(int)))
  {
    if (millis() - timebase > Estart_times[currentNote] * 1000) {
    Serial.printf("%dNote %d\n", currentNote, Emidi_notes[currentNote]);
    if (Emidi_notes[currentNote] == 64) {
      hit(note_E);
    } else if (Emidi_notes[currentNote] == 53) {
      hit(note_F1);
    } else if (Emidi_notes[currentNote] == 55) {
      hit(note_G1);
    } else if (Emidi_notes[currentNote] == 57) {
      hit(note_A1);
    } else if (Emidi_notes[currentNote] == 58) {
      hit(note_B_flat);
    } else if (Emidi_notes[currentNote] == 59) {
      hit(note_B);
    } else if (Emidi_notes[currentNote] == 60) {
      hit(note_C);
    } else if (Emidi_notes[currentNote] == 62) {
      hit(note_D);
    } else if (Emidi_notes[currentNote] == 65) {
      hit(note_F2);
    } else if (Emidi_notes[currentNote] == 67) {
      hit(note_G2);
    } else if (Emidi_notes[currentNote] == 69) {
      hit(note_A2);
    }

    currentNote++;
  }
  Serial.print("helo" );
  Serial.println(millis() - timebase); // Elapsed time (milliseconds)
  }
}
void playRingtone() {
  while (!(currentNote >= sizeof(Emidi_notes) / sizeof(int)))
  {
    if (millis() - timebase > Rstart_times[currentNote] * 1000) {
    Serial.printf("%dNote %d\n", currentNote, Rmidi_notes[currentNote]);
    if (Rmidi_notes[currentNote] == 64) {
      hit(note_E);
    } else if (Rmidi_notes[currentNote] == 53) {
      hit(note_F1);
    } else if (Rmidi_notes[currentNote] == 55) {
      hit(note_G1);
    } else if (Rmidi_notes[currentNote] == 57) {
      hit(note_A1);
    } else if (Rmidi_notes[currentNote] == 58) {
      hit(note_B_flat);
    } else if (Rmidi_notes[currentNote] == 59) {
      hit(note_B);
    } else if (Rmidi_notes[currentNote] == 60) {
      hit(note_C);
    } else if (Rmidi_notes[currentNote] == 62) {
      hit(note_D);
    } else if (Rmidi_notes[currentNote] == 65) {
      hit(note_F2);
    } else if (Rmidi_notes[currentNote] == 67) {
      hit(note_G2);
    } else if (Rmidi_notes[currentNote] == 69) {
      hit(note_A2);
    }

    currentNote++;
  }
  
  Serial.print("helo" );
  Serial.println(millis() - timebase); // Elapsed time (milliseconds)
  }
}

// testing sequience, from left to right on the marimba
void testAll(int note_delay) {
  hit(note_F1);
  delay(note_delay);
  hit(note_G1);
  delay(note_delay);
  hit(note_A1);
  delay(note_delay);
  hit(note_B_flat);
  delay(note_delay);
  hit(note_B);
  delay(note_delay);
  hit(note_C);
  delay(note_delay);
  hit(note_D);
  delay(note_delay);
  hit(note_E);
  delay(note_delay);
  hit(note_F2);
  delay(note_delay);
  hit(note_G2);
  delay(note_delay);
  hit(note_A2);
  delay(note_delay);
}