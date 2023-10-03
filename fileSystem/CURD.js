const fs = require('fs');
const path = require('path');
// create a new file
const getPath = path.join(__dirname, 'curd');
const file = `${getPath}/simple.txt`;
// fs.writeFileSync(file, 'simple file');

// read file

// fs.readFile(file,'utf-8', (err, data) => {
//     console.log(data);
// })


// update file

// fs.appendFile(file, 'this file maked for test purposes',(err)=>{
//     if(!err){
//         console.log('file is updated');
//     }
// });

// rename file

fs.rename(file,)