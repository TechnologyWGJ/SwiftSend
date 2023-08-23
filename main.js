const { BrowserWindow, app } = require("electron");
const Config = require('./config.json');

app.whenReady().then(() => {
    const mainWindow = new BrowserWindow({
        width: 300,
        height: 300
    });
    mainWindow.loadURL(Config.ServerUrl);
});