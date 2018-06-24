// Set up MySQL connection
const mysql = require('mysql');

if (process.env.LOCALDEV) {
    var connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "password", 
        database: "burgers_db"
    });
} else {
    // We are running outside of the local dev env
    var connection = mysql.createConnection({
        host: "us-cdbr-iron-east-04.cleardb.net",
        post: 3306,
        user: "bb3eee7b188001",
        password: "6056093f",
        database: "heroku_56895316183a163",
    });
}

// Make connection
connection.connect(function(err){
    if(err){
        console.log("Error connecting " + err.stack);
        return;
    }
    console.log("Connected as id " + connection.threadId);
});

module.exports = connection;