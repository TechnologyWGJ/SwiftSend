const { app, BrowserWindow, ipcMain, globalShortcut } = require("electron");
const Config = require('./config.json');
const fs = require('fs');
const path = require('path');

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 1000,
        height: 1000
    });
    mainWindow.loadURL(Config.ServerUrl);
};

const createSettingsWindow = () => {
    const settingsWindow = new BrowserWindow({
        width: 800,
        height: 100,
        webPreferences: {
            preload: path.join(__dirname, "preload.js")
        }
    });
    ipcMain.on("Setting", (event, data) => {
        const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
        config.ServerUrl = data;
        const updatedConfig = JSON.stringify(config, null, 4);
        fs.writeFileSync('config.json', updatedConfig, 'utf8');
    });
    settingsWindow.loadFile("settings.html");
};



app.whenReady().then(() => {
    createWindow();
    globalShortcut.register('CommandOrControl+,', () => {
        createSettingsWindow();
    });
});

app.on("window-all-closed", () => {
    if (process.platform != "darwin")
        app.quit();
});

app.on("activate", () => {
    createWindow();
});