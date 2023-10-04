const express=require('express');
const path = require('path');


const app = express();
app.listen(5000);

const publicPath =path.join(__dirname, 'public');

app.get('',(req,res)=>{
try{
    res.sendFile(`${publicPath}/index.html`);
}catch(err){
    console.log('internal server error',err);
}
})
app.get('/About',(req,res)=>{
try{
    res.sendFile(`${publicPath}/About.html`);
}catch(err){
    console.log('internal server error',err);
}
})
app.get('*',(req,res)=>{
try{
    res.sendFile(`${publicPath}/Err.html`);
}catch(err){
    console.log('internal server error',err);
}
})