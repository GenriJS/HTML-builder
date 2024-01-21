//connect modules
const fs = require('node:fs');
const path = require('node:path'); 

//script body
const filePath = path.join(__dirname, 'text.txt')

const readFile = fs.createReadStream(filePath, 'utf-8');

readFile.on('data', data => console.log(data));