const express=require('express');
const path = require('path');


const app = express();
app.listen(5000);

const publicPath =path.join(__dirname, 'public');

app.use(express.static(publicPath));