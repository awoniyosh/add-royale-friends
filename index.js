// install express with `npm install express` 
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => 
    // res.send('Hello World!2')
    res.sendFile(__dirname + '/public/index.html')
);

// export 'app'
module.exports = app;