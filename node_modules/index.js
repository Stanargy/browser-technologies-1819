(function () {

    var express = require('express');
    var app = express();
    var bodyParser = require('body-parser')
    var fs = require('fs')
    var path = require('path');
    var router = require('./router/router');
   
   
   
   
    // setup template engine
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, 'views/pages'));

    // access static file path
    app.use(express.static('public'));

    // use bodyparser
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json())

    // use router to handle  all requests
    app.use('/', router);
    
    
    
    // listen to port
    console.log('PORT 8080 | Server Started')
    app.listen(8080);
    }())