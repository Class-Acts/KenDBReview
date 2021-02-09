const {Client} = require('pg');
const format = require('og-format');

const client = new Client({
  host: 'localhost',
  user: 'KenSakama',
  password: '',
  database: 'sdc',
});

client.connect((err) => {
  console.log('error connecting to PostgreSQL');
});



