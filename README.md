# tessel_api

A continuation of learning NodeJS with a Tessel 2 board. This app aims to be a simple API to access on-board leds, a stream from a usb camera, and any additional sensors connected to the device. Once deployed, the Tessel 2 will connect wirelessly to a LAN and can run on battery power. A simple UI will provide user access over the LAN to an admin panel showing real-time data from sensors and a live video stream. A simple instance of MongoDB will record connected devices and their various states.

### The Stack
(In Progress. Additions to come.)
* NodeJS
* Express
* MongoDB

### The Firmware
* Tessel 2

### Setup
* `git clone <tessel_api> && cd tessel_api`
* `yarn install`
* `cd client && yarn install`
* Create a file `.env` and add environment variables for your database, e.g.
  -`DB_USER=<your_DB_user>`
  -`DB_PASS=<your_DB_password>`

## License

This project is licensed under the MIT License.
