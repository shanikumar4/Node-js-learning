const fs = require("fs");
const os = require("os");

console.log(os.cpus().length);

// fs.writeFileSync("./test.txt", "Hey There");

//Asyn

// fs.writeFile("./test.txt", "Hello World Async",(err)=>{} );

// const result = fs.readFileSync('./contacts.txt', 'utf-8');
// console.log(result);

// fs.readFile("./contacts.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log("Error message: ", err);
//         return;
//     } else {
//         console.log("Data: ", data);
//     }
// });
 
// fs.appendFileSync("./test.txt","Hey There\n");

// fs.cpSync("./test.txt", "./copy.txt");

// fs.unlinkSync("./copy.txt");
// console.log(fs.statSync("./test.txt").isFile());
// fs.mkdirSync("my-docss/a/b", { recursive: true });

//Default Thread Pool Size is 4
//Max? - 8Core cpu -8