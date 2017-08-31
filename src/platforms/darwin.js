"use strict";

const execFile = require("child_process").execFile;
const os = require("os");

const darwin = {};

darwin.sleep = () => {
    execFile("pmset", ["displaysleepnow"], (error, stdout, stderr) => {
        if (error) {
            throw error;
        }
    });
}
darwin.wake = () => {
    execFile("caffeinate", ["-u"], (error, stdout, stderr) => {
        if (error) {
            throw error;
        }
    });
}

darwin.supported = () => {
    return os.platform() == 'darwin';
}

module.exports = darwin;
