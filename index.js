const express = require('express');
const app = express();
var route = require('./api/routes/reportRoute');

app.get('/', function(req, res) {
  // res.send('HEY!');
    res.redirect('./server.js');
})
app.listen(3000, function(){console.log('lol - Server running on port 3000')});

