var express = require('express');
var bodyParser = require('body-parser')
var router = express.Router();
var { index, about, notFound} = require('../controller/indexController');

router.get('/', index)
router.get('/about', about)


router.get('/*', notFound)

router.post('/', postPizza)
router.post('/zelfMaken', zelfMaken)


function postPizza(req, res){
    const pizzaList= req.body.pizza
    res.render('checkOut', {
        myPizza: pizzaList
    })

}
function zelfMaken(req, res){
    const pizzaList= req.body.ingredient
    console.log(req.body)
    res.render('checkOutU', {
        myPizza: pizzaList
    })

}

module.exports = router;