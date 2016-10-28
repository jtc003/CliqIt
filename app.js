
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var group = require('./routes/group');
var group1 = require('./routes/group1');
var group2 = require('./routes/group2');
var group3 = require('./routes/group3');
var group4 = require('./routes/group4');
var group5 = require('./routes/group5');
var group6 = require('./routes/group6');
var notifications = require('./routes/notifications');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/group', group.view);
app.get('/group1', group1.view);
app.get('/group2', group2.view);
app.get('/group3', group3.view);
app.get('/group4', group4.view);
app.get('/group5', group5.view);
app.get('/group6', group6.view);
app.get('/notifications', notifications.view);
// Example route
// app.get('/users', user.list);



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
