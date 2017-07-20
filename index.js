// const express = require('express');
// const app = express();
// var route = require('./api/routes/reportRoute');
//
// app.get('/', function(req, res) {
//   res.send('HEY!');
// })
// app.listen(3000, function(){console.log('Server running on port 3000')});
//


var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Report = require('./api/models/reportModel.js'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/server');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/test', function(req, res) { res.json({data : 'hello'});})

var routes = require('./api/routes/reportRoute.js');
routes(app);



app.listen(port);


console.log('Report RESTful API server started on: ' + port);