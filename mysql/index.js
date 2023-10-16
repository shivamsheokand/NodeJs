const mysql=require('mysql');
const con=mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"",
    database:"shivam",
})
// check connection
con.connect((err)=>{
    if(err){
        console.warn(err);
    }else{
        console.warn('connected successfully');
    }
})

// fetch data from database 
con.query("SELECT * FROM address",(err,res)=>{
    console.warn('result',res);
});