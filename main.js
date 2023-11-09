/*
const {pi, myObj} = require("./part");

console.log("pi ->", pi);
console.log("Obj ->", myObj);
*/

const fs = require('fs');

fs.mkdir('./testFolder', function(err) {
    fs.writeFile('./testFolder/notes.txt','I am a BeCode warrior' ,(err) => {
    });
});