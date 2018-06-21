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

router.post('/api/burgers', function(req, res){
    burger.insertOne('burger_name', [req.body.name], function(result){
        res.json(true);
    })
});

module.exports = router;