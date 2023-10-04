
const express = require('express');
const path = require('path');
const reqfilter = require('./middleware');

const app = express();

app.listen(5000);
const dirpath = path.join(__dirname, '../Public');

// //middleware

// const reqfilter = (req, res,next) =>{
//     if(!req.query.age){
//         res.send('Pls Provide Age!!!')
//     }else if(req.query.age<18){
//         res.send('Ur under 18');
//     }else if(req.query.age>18){
//         next();
//     }else{
//         res.send('Pls Provide Vaild Age');
//     }
// }
// app.use(reqfilter);
app.get('',reqfilter,(req, res) => {
    try {
        res.sendFile(`${dirpath}/index.html`);
    } catch (Err) {
        console.log('error', Err);
    }
});
app.get('/user', (req, res) => {
    try {
        res.send(`<h1>This is User Page</h1>`);
    } catch (err) { console.log('error', err); }
});
app.get('*',(req, res) => {
    try{
        res.send('Page Not Found');
    }catch(err){console.log('error', err);}
});