(function () {

    const express = require('express');
    const app = express();
    const bodyParser = require('body-parser')
    const fs = require('fs')
    const path = require('path');
    const router = require('./router/router');
   
    const feature = require('./src/feature.js')

    
   
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