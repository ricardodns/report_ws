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

app.get('/test', function(req, res) { res.jsonp({data : 'hello'});})

var routes = require('./api/routes/reportRoute.js');
routes(app);



app.listen(port);


console.log('Report RESTful API server started on: ' + port);