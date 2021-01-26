const mysql = require('mysql');
const Promise = require('bluebird');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'rgi'
});
const db = Promise.promisifyAll(connection, { multiArgs: true });

module.exports = db;