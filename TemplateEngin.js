// its use basically make dynamic pages
// npm i ejs

const express=require('express');
const path = require('path');


const app = express();
app.listen(5000);

const publicPath =path.join(__dirname, 'public');

app.set('view engine', 'ejs'); // this is tamplate engine

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
app.get('/profile',(req,res)=>{
try{
    const user ={
        name:'shivam',
        email:'shivam@gmail.com'
    }
    res.render('profile',{user});
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