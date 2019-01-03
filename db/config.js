const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'cupcake',
  database : 'hotels'
});

connection.connect();

module.exports = connection;