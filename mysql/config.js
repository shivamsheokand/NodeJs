const mysql = require('mysql');
const con= mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database:'learnsql',
});

// check connection

// con.connect((err)=>{
//     if(err){
//         console.warn(err);
//     }else{
//         console.warn('connected successfully');
//     }
// })

con.connect?console.warn('connected succesful'):console.warn(err);

module.exports=con;