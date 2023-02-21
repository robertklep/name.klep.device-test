'use strict';

const { Device } = require('homey');

class MyDevice extends Device {

  async onInit() {
    this.log('MyDevice has been initialized');
    //await this.setUnavailable('hello world');
  }

}

module.exports = MyDevice;
