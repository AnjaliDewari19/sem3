const fs = require('fs');

// create file
fs.writeFile(
    'sample.txt', 'Welcome to Full Stack Development !!!',(err) => {
        if(err){
            console.log('Error creating file : ',err);
            return ;
        }
        console.log('File created successfully !')
    }
)

// read file
fs.readFile(
    'sample.txt', 'utf-8',(err,data) => {
        if(err){
            console.log('Error reading file : ',err);
            return ;
        }
        console.log('File content : ', data);
    }
)

//update file
fs.appendFile(
    'sample.txt', '\nSemester : 3 \nCSE DS - A',(err) => {
        if(err){
            console.log('Error updating file : ',err);
            return ;
        }
        console.log('File updated successfully !');
    }
)

// create file
fs.writeFile(
    'example.txt', 'Welcome to CSE DS !!!',(err) => {
        if(err){
            console.log('Error creating file : ',err);
            return ;
        }
        console.log('File created successfully !')
    }
)

//delete file
fs.unlink(
    'example.txt', (err) => {
        if(err){
            console.error('Error deleting file :' , err);
        }
        console.log('File deleted successfully !!')
    }
)