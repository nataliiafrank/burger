// Import (require) connection
var connection = require('../config/connection.js');

// Orm object with the methods that will execute the necessary MySQL commands in the controllers
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

    insertOne: function(table, col, val, cb) {
        var queryString = "INSERT INTO " + table;
        queryString += ' (' + col.toString() + ') ';
        queryString += 'VALUES';
        queryString += ' ("' + val.toString() + '");';
        
        connection.query(queryString, function(err, result) {
            if (err) {
            throw err;
            }
            cb(result);
        });
    },

    updateOne: function(table, colObj, condition, cb) {
        var queryString = "UPDATE " + table;
        queryString += ' SET ' + colObj;
        queryString += ' WHERE ' + condition + ";";

        connection.query(queryString, function(err, result) {
            if (err) {
            throw err;
            }
            cb(result);
        });
    },

    deleteAll: function(table, cb){
        var queryString = "Truncate " + table + ";";

        connection.query(queryString, function(err, result) {
            if (err) {
            throw err;
            }
            cb(result);
        });
    }
}

module.exports = orm;