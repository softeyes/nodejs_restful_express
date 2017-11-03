// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express = require('express'); // call express
var app = express(); // define our app using express
var bodyParser = require('body-parser');
var router = require('./routes/routes');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({
    extended: true
}));
// basically tells the system that you want json to be used.
app.use(bodyParser.json());

// whatever is in the environment variable PORT, or 8080 if there's nothing there.
var port = process.env.PORT || 8080;

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/db_name', {useMongoClient:true}); // connect to our database

var Bear = require('./models/bear');

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);