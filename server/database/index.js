const mysql = require('mysql');
// const {Sequelize} = require('sequelize');
// const sequelize = new Sequelize('rgi', 'student', 'student', {
//   host: 'localhost',
//   dialect: 'mysql'
// });


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
