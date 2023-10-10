const express = require('express');
const path = require('path');
const reqfilter = require('./middleware');
const app = express();
const route = express.Router();


app.use(reqfilter);


const dirpath = path.join(__dirname, '../Public');
app.use(express.static(dirpath));

// Define routes
app.get('/', (req, res) => {
    res.sendFile(path.join(dirpath, 'index.html'));
});

route.get('/user', (req, res) => {
    res.send('<h1>This is User Page</h1>');
});

app.get('/contact', (req, res) => {
    res.send('<h1>This is Contact Page</h1>');
});

// Handle 404 errors
app.use((req, res) => {
    res.status(404).send('Page Not Found');
});


// Handle global errors
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Internal Server Error');
});

app.use('/', route);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});