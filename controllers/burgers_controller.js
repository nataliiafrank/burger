const express = require('express');

var burger = require('../models/burger.js');

var router = express.Router();

router.get('/', function(req, res){
    burger.selectAll(function(data){
        var object = {
            burgers: data,
        }
        res.render('index', object);
    });

    
});
module.exports = router;