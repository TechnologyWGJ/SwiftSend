const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld("api", {
    Setting: (data) => {
        ipcRenderer.send("Setting", data);
    }
});