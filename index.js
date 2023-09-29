const colors= require('colors');
const fs = require('fs');
console.log('Hello world!'.yellow);
console.log('Hello world!'.blue);
console.log('Hello world!'.red);

// create multiple files use looping file system
const path = require('path');
// const getPath = path.join(__dirname);
const getPath = path.join(__dirname,'fileSystem');
// console.warn(getPath);
for(i=0;i<5;i++) {
    fs.writeFileSync(getPath+'/hello'+i+'txt','a simple text file');
    // fs.writeFileSync(`hello ${i}txt`,'a simple text file');
}
fs.readdir(getPath,(err,files)=>{
    files.forEach((item)=>{
        console.warn(item);
    })
})