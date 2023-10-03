// const colors= require('colors');
// const fs = require('fs');
// console.log('Hello world!'.yellow);
// console.log('Hello world!'.blue);
// console.log('Hello world!'.red);

// // create multiple files use looping file system
// const path = require('path');
// // const getPath = path.join(__dirname);
// const getPath = path.join(__dirname,'fileSystem');
// // console.warn(getPath);
// for(i=0;i<5;i++) {
//     fs.writeFileSync(getPath+'/hello'+i+'txt','a simple text file');
//     // fs.writeFileSync(`hello ${i}txt`,'a simple text file');
// }
// fs.readdir(getPath,(err,files)=>{
//     files.forEach((item)=>{
//         console.warn(item);
//     })
// })

// express js
const express = require('express');
const app = express();
app.get('',(req,res)=>{
    // console.log('data sent by Browsers',req.query);
    console.log('data sent by Browsers',req.query.name);
    res.send(`
    <h1>Hello ${
        req.query.name
    } </h1>
    <a href='/about'>GO About</a>`);
});
app.get('/about',(req,res)=>{
    res.send(`
    <div>
    <input type="text" Placeholder='Enter your name' />
    <Button type='submit'>Submit</Button>
    <a href='/help'>GO Help</a>
    </div>
    `);
});
const data= require('./json/data.json')
app.get('/help',(req,res)=>{
    res.send(`
    <h1>Help</h1>
    <a href='/'>Go Home</a>
    `);
});

app.listen(5000)