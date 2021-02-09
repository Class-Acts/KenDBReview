const { Pool } = require('pg');
const pool = new Pool ({
  host: 'localhost',
  user: 'KenSakama',
  password: '',
  database: 'sdc',
});




const getSimilarItems = (id) => {
  pool.connect()
    .then(client => {
      let text = `SELECT product_id, department, bought_together FROM bought_together WHERE product_id < ${id}`;
      console.time('select query');
      return client
        .query(text)
        .then((result) => {
          console.timeEnd('select query');
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          client.end();
        });
    });
};

const getSimilarItemsByID = (id) => {
  pool.connect()
    .then(client => {
      let text = `SELECT product_id, department, bought_together FROM bought_together WHERE bought_together = ${id} ORDER BY product_id ASC`;
      console.time('select similar query');
      return client
        .query(text)
        .then((result) => {
          console.timeEnd('select similar query');
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          client.end();
        });
    });
};


// getSimilarItems(50);
getSimilarItemsByID(1224);