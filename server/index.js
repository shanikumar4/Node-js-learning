const http = require('http');
const fs = require('fs');
const url = require('url');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.send("Home from home page");
});

app.get('/about', (req, res) => {  
    return res.send("Hello from about page"+ " hey " + req.query.name);
});

app.listen(8000, () => console.log("Server Started!"));

// const myServer = http.createServer(app);

// const myServer = http.createServer((req, res)=> {
//     if(req.url === '/favicon.ico') return res.end();
//     const log = `${Date.now()}: ${req.method} ${req.url} New Request Received\n`;
//     const myUrl = url.parse(req.url, true);
//     console.log(myUrl);
//     fs.appendFile('log.txt',log, (err, data) =>{
//         switch (myUrl.pathname) {
//             case '/' :
//             if(req.method=== 'GET') res.end("Home Page"); 
//             break;
//             case '/about' :
//             const username = myUrl.query.myname
//             res.end(`Hi ${username}`);
//             break;
            
//             case '/search':
//                 const search = myUrl.query.search_query;
//                 res.end(`Here are your search results for `+search);
//                 break

//             case '/signup' :
//                 if(req.method === 'Get') res.end("This is a signup Form");
//                 else if(req.method === 'POST') res.end("Success");
//                 break;
//             default: res.end("404 not found")
//         }
//     });
    
// });

// myServer.listen(8000, ()=> console.log("Server Started!"));
