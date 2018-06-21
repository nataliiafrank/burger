// Import (require) connection
var connection = require('../config/connection.js');

// Create orm object with the methods that will execute the necessary MySQL commands in the controllers
var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
            throw err;
            }
            cb(result);
        });
    },

    insertOne: function() {

    },

    updateOne: function() {

    }
}

module.exports = orm;