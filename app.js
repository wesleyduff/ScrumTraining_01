
/**
 * Module dependencies.
 */

var express = require('express');
var db = require('./model/db');
var routes = require('./routes');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/home', routes.index);
app.get('/diet', routes.diet);
app.get('/imageList', routes.images);
app.get('/anatomy', routes.anatomy);
app.get('/habitat', routes.habitat);
app.get('/behavior', routes.behavior);
app.get('/mating', routes.mating);
app.get('/communication', routes.communication);
app.get('/popculture', routes.popculture);
app.get('/about', routes.about);
app.get('/contact', routes.contact);

//http.createServer(app).listen(app.get('port'), function(){
//  console.log('Express server listening on port ' + app.get('port'));
//});

module.exports = app
