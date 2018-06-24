// Dependencies
var orm = require('../config/orm.js');

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },

    insertOne: function(col, val, cb) {
        orm.insertOne("burgers", col, val, function(res){
            cb(res);
        });
    },

    updateOne:  function(colObj, condition, cb) {
        orm.updateOne("burgers", colObj, condition, function(res){
            cb(res);
        });
    },

    deleteAll: function(cb){
        orm.deleteAll("burgers", function(res){
            cb(res);
        })
    }
};

module.exports = burger;