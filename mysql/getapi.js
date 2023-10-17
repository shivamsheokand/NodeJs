const express = require('express');
const app = express();

const con = require('./config')

app.get('/', (req, res) => {
    try {
        con.query('SELECT * FROM student', (err, data) => {
            if (err) {
                res.send(err);
            } else{
                res.send(data);
            }
        });
    } catch (err) {
        console.warn(err);
    }
});

app.listen(5000);