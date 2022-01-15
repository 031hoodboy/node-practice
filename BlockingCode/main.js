var fs = require("fs");

// var data = fs.readFileSync('input.txt'); blocking code

var data = fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

// console.log(data.toString()); blocking code
console.log("Program hs ended");