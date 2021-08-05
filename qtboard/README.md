1. close all other tabs(projects) and keep only your project

2. Start your QAD server

3. Turn on the bluetooth and your motherboard(RIO/VEDA)

4. Go to "More Bluetooth options" and
   check your boards outing comport eg. COM3/COM4/COM5

5. In the QAD select your outgoing comport, select your board,
   select version "latest" then click "Upload firmware"

6. In code sandbox index.html file, add your required components.

See this - https://qtlearn.page.link/qtwc-docs

7. properties available:

id, state, ccs(control, config, simulation)
for sensors - onData

7. In qtsketch.js write your logic.

List of functions for components:

1. Motor - .run(direction, speed)
2. Led - .led(state)
3. RGBLed - .rgb(state, redvalue, greenvalue, bluevalue)
4. servo - .sweep(init_pos, final_pos)
5. buzzer - .buzz(state)
6. argb - .argb(state, index, red, green, blue)
