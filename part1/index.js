// function sum(a,b){
//     return a+b;
// }

// console.log(sum(12,23))

// import {sum, diff} from './math.js';

// console.log(sum(23, 24))
// console.log(diff(20,10))

// const fs = require('fs');

// const d = fs.readFileSync('data.txt', 'utf8');
// console.log(d)

// console.log("Task Started")

// fs.readFile('data.json', 'utf8', (err, data)=> {
//     if(err){
//         console.error(err);
//     } else{
//         console.log(data);
//     }
// });

// console.log("Task completed")


const http = require('http');

const server = http.createServer((req, res)=> {
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.end('Hello, World\n');
});


const PORT =3000;

server.listen(PORT, () =>{
    console.log('Server is running at http:/localhost:3000');
});

