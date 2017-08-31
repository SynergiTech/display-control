"use strict";

const exec = require("child_process").exec;
const os = require("os");
const linux = {};

linux.sleep = () => {
    exec('export DISPLAY=:0; xset dpms force suspend');
}
linux.wake = () => {
    exec('export DISPLAY=:0; xset dpms force on');
}
linux.supported = () => {
    return os.platform() == 'linux';
}

module.exports = linux;
