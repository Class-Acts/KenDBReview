const mysql = require('mysql');
const Promise = require('bluebird');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'rgi'
});
const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(result => {
    console.log('Connected to mySQL');
  })
  .catch(err => {
    console.log(err);
  });

module.exports = db;