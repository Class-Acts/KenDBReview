const { Pool } = require('pg');

const pool = new Pool ({
  host: 'localhost',
  user: 'KenSakama',
  password: '',
  database: 'sdc',
});

const copyProducts = "COPY products(department, product_category, brand, product_name, description, price, review, photo_url) FROM '/Users/KenSakama/HackReactor/KenDBReview/server/postgres/CSV/products.csv' DELIMITER ',' CSV HEADER;";

const copyFeatures = "COPY features(product_id, feature0, feature1, feature2, feature3, feature4) FROM '/Users/KenSakama/HackReactor/KenDBReview/server/postgres/CSV/features.csv' DELIMITER ',' CSV HEADER;";

const copyBoughtTogether = "COPY bought_together(department, product_id, bought_together) FROM '/Users/KenSakama/HackReactor/KenDBReview/server/postgres/CSV/boughtTogether.csv' DELIMITER ',' CSV HEADER;";

pool.on('error', (err, client) => {
  console.error(err, 'error connecting to pg Pool');
  process.exit();
});

pool.connect()
  .then(client => {
    console.time('products');
    return client
      .query(copyProducts)
      .then((response)=> {
        console.timeEnd('products');
        console.log('products copied', response);
        console.time('features');
        return client.query(copyFeatures);
      })
      .then((response) => {
        console.timeEnd('features');
        console.log('features copied', response);
        console.time('BoughtTogether');
        return client.query(copyBoughtTogether);
      })
      .then((response) => {
        console.timeEnd('BoughtTogether');
        console.log('bought_together copied', response);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        client.end();
        console.log('copy complete');
      });
  });
// /Users/KenSakama/HackReactor/KenDBReview/server/postgres/CSV/