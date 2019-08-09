'use strict';
const exec = require('child_process').exec;
const os = require('os');
const win32 = {};
win32.sleep = () => {
    exec('powershell (Add-Type \'[DllImport(\\"user32.dll\\")]^public static extern int SendMessage(int hWnd, int hMsg, int wParam, int lParam);\' -Name a -Pas)::SendMessage(0xffff,0x0112,0xF170,0x0002)');
};
win32.wake = () => {
    exec('powershell (Add-Type \'[DllImport(\\"user32.dll\\")]^public static extern void mouse_event(uint dwFlags, int dx, int dy, uint dwData, int dwExtraInfo);\' -Name user32 -PassThru)::mouse_event(1,1,0,0,0)');
    exec('powershell (Add-Type \'[DllImport(\\"user32.dll\\")]^public static extern int SendMessage(int hWnd, int hMsg, int wParam, int lParam);\' -Name a -Pas)::SendMessage(0xffff,0x0112,0xF170,-0x0001)');
};
win32.supported = () => {
    return os.platform == 'win32';
};
module.exports = win32;