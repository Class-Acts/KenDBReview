const mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'rgi'
});
connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MySQL');
  }
});
module.exports = connection;
