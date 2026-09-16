const fs = require('fs')

// create file
fs.writeFileSync('student.txt', 'This is experiment no. 2 in FSD workshop.','utf-8');
console.log('File is written successfully !\n');

// read file
const data = fs.readFileSync('student.txt','utf-8');
console.log('File content is given as : ', data,'\n');

// update file
fs.appendFileSync('student.txt','\nThis file contain detail of section A.');
console.log('File is updated !')

const data1 = fs.readFileSync('student.txt','utf-8');
console.log('File content is given as : ', data1, '\n');

// delete
fs.writeFileSync('file.txt','This file is created for deletion purpose','utf-8');
fs.unlink('file.txt');
console.log("File deleted successfully !");

// folder create
fs.mkdirSync('FOLDER');
console.log("New folder is created successfully !");

// remove folder
fs.rmdirSync('FOLDER');
console.log("Folder deleted successfully !\n");

// check exsistence
if(fs.existsSync('student.txt')){
    console.log('File exsist !!!');
}else{
    console.log('File NOT found !!!');
}