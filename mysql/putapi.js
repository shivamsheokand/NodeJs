const express = require('express');
const app = express();
const con = require('./config');
// convert io request body to json string
app.use(express.json());

app.get('/',(req,res)=>{
    try{
        con.query('SELECT * FROM student',(err, data)=>{
            if(err){
                console.warn(err);
            }else{
                res.send(data);
            }
        });
    }catch(err){
        console.warn(err);
    }
})

app.post('/',(req,res)=>{
    try{
        const data = req.body;
        // const data = { rollno:203, name: 'sAM',marks:'99',grade:'A',city:'Dehli' };
        con.query('INSERT INTO student set ?',data,(err,data,field)=>{
            if(err){
                console.warn(err);
            }else{
                res.send(data);
            }
        });
    }catch(err){ 
        warn(err);
    }
});

// put 

app.put('/',(req,res)=>{
    try{
        // const data = [req.body.rollno,req.body.name,req.body.marks,req.body.grade,req.params.rollno];
        const data = [205,"shivam",85,"b","Haryan",203];
        con.query('UPDATE student Set rollno=?,name=?,marks=?,grade=?,city=? WHERE rollno=?',data,(err,data,field)=>{
            if(err){
                console.warn(err);
            }else{
                res.send(data);
            }
        })
    }catch(Err){
        console.warn(Err);
    }
});

app.listen(5000);