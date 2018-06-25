// Set up MySQL connection
const mysql = require('mysql');

if (process.env.JAWSDB_URL) {
    var connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    // We are running outside of the local dev env
    var connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "password", 
        database: "burgers_db"
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