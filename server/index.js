const http = require('http');
const fs = require('fs');
const url = require('url');

const myServer = http.createServer((req, res)=> {
    if(req.url === '/favicon.ico') return res.end();
    const log = `${Date.now()}: ${req.url} New Request Received\n`;
    const myurl = url.parse(req.url, true);
    console.log(myurl);
    fs.appendFile('log.txt',log, (err, data) =>{
        switch (myurl.pathname) {
            case '/' : res.end("Home Page"); 
            break;
            case '/about' :
            const username = myurl.query.myname
            res.end(`Hi ${username}`);
            break;
            default: res.end("404 not found")
        }
    });
    
});

myServer.listen(8000, ()=> console.log("Server Started!"));
