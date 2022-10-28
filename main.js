const { app, BrowserWindow } = require('electron')
const path = require('path')


const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js')
      }
    })
  
    win.loadURL('https://repl.it/@ArjunJakkipally/terminal?embed=1&output=1');   // load terminal



    const fs = require('fs');

fs.readFile('clearcache.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Clear cache: Set to " + JSON.parse(data)["Do you want clear cache between sessions (y/n)"]);
  if (JSON.parse(data)["Do you want clear cache between sessions (y/n)"] == "y") {
  const ses = win.webContents.session;
ses.clearCache(() => {
  console.log("Cache cleared!");
});
win.webContents.session.clearStorageData()
}
});

    
}


app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })

  app.whenReady().then(() => {
    createWindow()
  
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
  })
