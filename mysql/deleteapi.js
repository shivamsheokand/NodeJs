const express = require('express');
const app = express();
const con = require('./config');
app.use(express.json());
app.get('/',(req,res)=>{
    try{
        con.query('SELECT * FROM student',(err,data,feild)=>{
            if(err){
                console.warn(err);
            }else{
                res.send(data);
            }
        })
    }catch(Err){
        console.log(Err);
    }
});

app.post('/',(req,res)=>{
    const data = {rollno: 3, name: 'shivam1'};
    con.query('INSERT INTO student set ?',data,(err,data,feild)=>{
        if(err){
            console.warn(err);
        }else{
            res.send(data);
        }
    })
});

app.delete('/:rollno',(req,res)=>{
    try{
        con.query('DELETE FROM student WHERE rollno='+req.params.rollno,(err,data,feild)=>{
            if(err)throw console.warn(err);
            res.send(data);
        });
    }catch(Err){
        console.warn(Err);
}
});


app.listen(5000);