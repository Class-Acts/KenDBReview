const { Pool } = require('pg');
const pool = new Pool ({
  host: 'localhost',
  user: 'KenSakama',
  password: '',
  database: 'sdc',
});

// const getRelated = () => {
//   pool.connect()
//     .then(client => {
//       return client
//         .query()
//     })
// };