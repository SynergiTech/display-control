'use strict';
const exec = require('child_process').exec;
const os = require('os');
const linux = {};
const DISPLAY = process.env.DISPLAY || ':0';

linux.sleep = () => {
    exec(`export DISPLAY=${DISPLAY}; xset dpms force suspend`);
};
linux.wake = () => {
    exec(`export DISPLAY=${DISPLAY}; xset dpms force on`);
};
linux.supported = () => {
    return os.platform() == 'linux';
};
module.exports = linux;
