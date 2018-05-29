var express = require('express'),
app = express(),
port = process.env.PORT || 3000,
https = require('https'),
mongoose = require('mongoose'),
fs = require('fs'),
Restaurant = require('./api/models/Restaurant'), //created model loading here
bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://Nabulus:ouvrecmoi@ds237620.mlab.com:37620/restox'); 
var httpsOptions = {
    key: fs.readFileSync( './secure/localhost.key' ),
    cert: fs.readFileSync( './secure/localhost.cert' ),
}
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/RestaurantRoutes'); //importing route
routes(app); //register the route
var server = https.createServer(httpsOptions, app);
server.listen( port, function () {
    console.log( 'RestauX server listening on port ' + server.address().port );
} );
