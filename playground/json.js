const fs = require('fs');

var noteObj = {
    title : 'This is title',
    body : 'This is body'
}

console.log(typeof noteObj);
console.log(noteObj);

//conver noteObj to string and save to file
// var noteString = JSON.stringify(noteObj);
// console.log(typeof noteString);
// console.log(noteString);
// fs.writeFileSync('notes.json',JSON.stringify(noteObj));

//read from file and convert to json obj

// noteString = fs.readFileSync('notes.json');
// console.log(typeof noteString);
// console.log(noteString);
// noteObj = JSON.parse(noteString);
// console.log(typeof noteObj);
// console.log(noteObj);

fs.writeFileSync('notes.json',noteObj);
