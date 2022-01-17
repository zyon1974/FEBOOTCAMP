// richiamo il modulo 'file system'
const fs = require("fs");
// richiamo package 'superheroes'
var superheroes = require("superheroes");

// copia un file
fs.copyFileSync("file1.txt", "file2.txt");

// un nome random di super eroe
var mySup = superheroes.random();

console.log(mySup);
