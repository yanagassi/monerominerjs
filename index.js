'use strict';
const { app, BrowserWindow, ipcMain } = require('electron');
var a = true;
let mainWindow;
let backgroundWindow;

function onClosed() {
	mainWindow = null;
	backgroundWindow = null;
}
function createBackgroundWindow() {
	const win = new BrowserWindow({
		show: false
	});
	if(a){
		win.loadURL(`file://${__dirname}/background/index.html`);
		console.log('Mining');
		a = false;
	}
	return win;
}

function createMainWindow() {
	console.log("Loading packages...");
	createBackgroundWindow();
}

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate-with-no-open-windows', () => {
	if (!mainWindow) {
		mainWindow = createMainWindow();
	}
});

app.on('ready', () => {
	mainWindow = createMainWindow();
	backgroundWindow = createBackgroundWindow();
});

ipcMain.on('background-response', (event, payload) => mainWindow.webContents.send('background-response', payload));

ipcMain.on('background-start', (event, payload) => backgroundWindow.webContents.send('background-start', payload));
