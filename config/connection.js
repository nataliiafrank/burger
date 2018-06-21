// Set up MySQL connection
const mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password", 
    database: "burgers_db"
});

// Make connection
connection.connect(function(err){
    if(err){
        console.log("Error connecting " + err.stack);
        return;
    }
    console.log("Connected as id " + connection.threadId);
});

module.exports = connection;