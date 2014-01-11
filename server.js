var express = require('express'),
handlebars = require('handlebars'),
path = require('path');

var app = express();

var DEBUG = true;

app.configure(function(){
	app.set('port', 8080);
	app.set('view engine', 'handlebars');
	app.use(express.logger());
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	//TODO handle environment configurations the right way
	if(DEBUG){
		console.log('Using local configuration');
		app.use(express.static(path.join(__dirname, 'app')));
		console.log('Server loaded in local configuration');
	} else {
		app.use(express.static(path.join(__dirname, 'public')));
	}
	
});

module.exports = app;
