const fs = require('fs').promises;

// create
async function writeFile(){
    try{
        await fs.writeFile("promise.txt", "ABES Engineering College !");
        console.log("File created and data written successfullly.");
    }catch(error){
        console.log("Error : " , error);
    }
}
writeFile();

// update
async function appendFile(){
    try{
        await fs.appendFile("promise.txt", "\nWelcome to FSD Training");
        console.log("Data appended successfully.");
    }catch(error){
        console.log("Error : " ,error);
    }
}
appendFile();

// rename
async function renameFile(){
    try{
        await fs.rename("promise.txt", "promisess.txt");
        console.log("File renamed successfully.");
    }catch(error){
        console.log("Error : " ,error);
    }
}
renameFile();

// delete
async function deleteFile(){
    try{
        await fs.unlink("deletion.txt");
        console.log("File deleted successfully !");
    }catch(error){
        console.log("Error : " , error);
    }   
}
deleteFile();

