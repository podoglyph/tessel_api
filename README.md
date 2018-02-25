# tessel_api

A continuation of learning NodeJS with a Tessel 2 board. This app aims to be a simple API to access on-board leds, a stream from a usb camera, and any additional sensors connected to the device. Once deployed, the Tessel 2 will connect wirelessly to a LAN and may run on battery power. A simple admin panel shows real-time data from sensors and a live video stream. An instance of MongoDB will record connected devices and their various states.

Below are two live examples where the Tessel 2 is deployed on battery power and sending a live video stream and temperature data from a basic temperature sensor.

### Example 1
![Demo](https://github.com/podoglyph/tessel_api/blob/master/demo.gif)

This second example shows how the user can toggle the onboard leds through the UI. With this baseline architecture in place the Tessel API is ready to transmit data from additional sensors.

### Example 2
![Demo](https://github.com/podoglyph/tessel_api/blob/master/demo2.gif)


### Tessel 2 Assembly
![Demo](https://github.com/podoglyph/tessel_api/blob/master/tessel-assembly.jpg)
![Demo](https://github.com/podoglyph/tessel_api/blob/master/tessel-temp-sensor.jpg)


### The Stack
(In Progress. Additions to come.)
* NodeJS
* Express
* MongoDB & Mongoose with mLab
* ReactJS


### The Firmware
* Tessel 2

### Setup
* `git clone <tessel_api> && cd tessel_api`
* `yarn install`
* `cd client && yarn install`
* Create a file `.env` in the project root and add environment variables for your database, e.g.  
  * `DB_USER=<your_DB_user>`  
  * `DB_PASS=<your_DB_password>`

## License

This project is licensed under the MIT License.
