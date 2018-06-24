// Dependencies
const express = require('express');

var burger = require('../models/burger.js');

var router = express.Router();

// Routs
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

router.put('/api/burgers/:id', function(req, res){
    var condition = "id = " + req.params.id
    var devoured = 'devoured = ' + true;

    burger.updateOne(devoured, condition, function(result){
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete('/api/burgers', function(req, res){
    burger.deleteAll(function(result){
        console.log(result);
            res.status(200).end();
    });
});

module.exports = router;