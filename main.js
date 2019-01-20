 const {app,BrowserWindow} = require('electron')//Importing app object and BrowserWindow from electron
 const path = require('path'); //node.js core module - We need these to load index.html
 
 const url = require('url'); //We need these to load index.html
 
 // init win
 let win; //Global Reference to window object - used to keep window open even when javascript object is garbage collected
 
 function createWindow() {
     // Create browser window
     win = new BrowserWindow({width:800, height:600,icon:__dirname+'/img/sysinfo.png'}); 
     
     
     // Load index.html
     win.loadURL(url.format({
         pathname: path.join(__dirname,'index.html'),
         protocol:'file:',
         slashes:true
     }));
     
     
     // Open devtools
     win.webContents .openDevTools();
     
     win.on('closed',() => {
         win=null;
     });
 }
 
 // Run create window function 
 app.on('ready',createWindow);
 
 // Quit when all windows are closed
 app.on('window-all-closed', () => {
     
    if(process.platform !== 'darwin') {
        app.quit(); 
    }
     
 });
 
 
 
 
 
 
 
 
 
 