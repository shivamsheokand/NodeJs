// Application level middleware


const express=require('express');
const path=require('path');

const app = express();
const dirpath=path.join(__dirname, 'public');
console.log(dirpath);

app.listen(5000);

// middleware

const reqfilter=(req,res,next)=>{
    if(!req.query.age){
        res.send('Please Provide age');
    }else if(req.query.age<18){
        res.send('Ur under 18');
    }else if(req.query.age>18){
        next();
    }else{
        res.send('Please provide a valid age');
    }
}

app.use(reqfilter);

app.get('',(req,res)=>{
    try{
        res.sendFile(`${dirpath}/index.html`);
    }catch(Err){
        console.log('invalid request',Err);
    }
})
app.get('/user',(req,res)=>{
    try{
        res.send(`
        <h1>User Page</h1>
        `)
    }catch(Err){
        console.log('invalid request',Err);
    }
})
app.get('*',(req,res)=>{
    try{
        res.sendFile(`${dirpath}/Err.html`);
    }catch(Err){
        console.log('invalid request',Err);
    }
})
