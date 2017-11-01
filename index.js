const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 8080;
const app = express();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/NYT';

const obj = {
    name: 'object',
    body: 'a test object'
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
}));

app.use(express.static(path.join(__dirname, 'client/public')));

app.get('/obj', (req, res) => {
    console.log('requested');
    res.send('success');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/public/index.html'));
});

app.listen(PORT);

console.log(`App running on port ${PORT}`);