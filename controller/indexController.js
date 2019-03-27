var path = require('path');
var bodyParser = require('body-parser');

exports.index = (req, res) => {
    res.render('index.ejs') 
}

exports.about = (req, res) => {
    res.render('about');
}

exports.notFound = (req, res) => {
    res.render('404');
}