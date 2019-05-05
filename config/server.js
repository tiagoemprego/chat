var express = require('express');
var consign = require('consign');
var path = require('path');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var hbs = require('express-handlebars');

var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

// app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'main', layoutsDir: __dirname + '.app/views/site/'}));
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'hbs');

app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app);

module.exports = app;
