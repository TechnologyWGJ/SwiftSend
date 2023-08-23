const { app, BrowserWindow, ipcMain, globalShortcut } = require("electron");
const fs = require('fs');
const path = require('path');

const userDataPath = app.getPath('userData');
const configFilePath = path.join(userDataPath, 'config.json');

const defaultConfig = {
    ServerUrl: "http://baidu.com"
};

let Config = {};

try {
    const configData = fs.readFileSync(configFilePath, 'utf-8');
    Config = JSON.parse(configData);
} catch (error) {
    console.error('Error reading or parsing config file:', error);
    // 如果文件不存在或无法解析，创建文件并写入默认配置
    try {
        fs.writeFileSync(configFilePath, JSON.stringify(defaultConfig, null, 2), 'utf-8');
        Config = defaultConfig;
    } catch (writeError) {
        console.error('Error creating config file:', writeError);
        Config = {}; // 若创建文件失败，将 Config 设为一个空对象
    }
}

function saveConfig() {
    try {
        fs.writeFileSync(configFilePath, JSON.stringify(Config, null, 2), 'utf-8');
    } catch (writeError) {
        console.error('Error saving config:', writeError);
    }
}

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
        Config.ServerUrl = data;
        saveConfig();
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