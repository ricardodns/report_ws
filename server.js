// var express = require('express');
// var path = require('path');
//
// var logger = require('morgan');
//
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');
//
// var reports = require('./controllers/reportController.js');
//
// var app = express();
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
//
//
// //routes
// app.get('/', function(req, res){
//     res.jsonp({success: 'hello'});
// });
//
// app.get('/reports', function(req, res){
//     res.jsonp(reports.list_all_reports);
// });
//
// app.listen(3000);
//
// console.log('Report RESTful API server started');

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