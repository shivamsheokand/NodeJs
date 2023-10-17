const express = require('express');
const app = express();

const con = require('./config');

app.get('/', (req, res) => {
    try {
        con.query('SELECT * FROM student', (err, data) => {
            if (err) {
                res.send(err);
            } else {
                res.send(data);
            }
        });
    } catch (err) {
        console.warn(err);
    }
});

app.post('/', (req, res) => {
    try {
        const data = { rollno: 3, name: 'shivam1' };
        con.query('INSERT INTO student SET ?', data, (err, result, fields) => {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
    } catch (err) {
        console.warn(err);
    }
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
