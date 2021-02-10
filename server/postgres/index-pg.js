const { Pool } = require('pg');
const pool = new Pool ({
  host: 'localhost',
  user: 'KenSakama',
  password: '',
  database: 'sdc',
});

const getProduct = (id) => {
  let products = [];
  let department = '';
  let low = id - 6;
  let high = id + 6;
  return new Promise ((resolve, reject) => {
    pool.connect()
      .then(client => {
        let text = `
        SELECT
          products.id,
          products.brand,
          products.department,
          products.product_name,
          products.review,
          products.price,
          products.description,
          products.photo_url,
          bt.bought_together
        FROM products
        INNER JOIN bought_together as bt ON products.id = bt.product_id
        WHERE products.id BETWEEN ${low} AND ${high}
        LIMIT 12;
        `;
        // console.time('select similar detail query');
        return client
          .query(text)
          .then((resp) => {
            // console.timeEnd('select similar detail query');
            for (let i = 0; i < resp.rows.length; i++) {
              let product = {id: '', brand: '', name: '', rating: '', price: '', description: '', photoURL: '', features: []};
              product.id = resp.rows[i].id;
              product.brand = resp.rows[i].brand;
              product.name = resp.rows[i].product_name;
              product.rating = resp.rows[i].review;
              product.price = resp.rows[i].price;
              product.description = resp.rows[i].description;
              product.photoURL = resp.rows[i].photo_url;
              products.push(product);
            }
          })
          .catch((err) => {
            console.log(err);
          })
          .then(()=> {
            let featureQuery = `SELECT * FROM features LIMIT 12;`;
            // console.time('select feature from DB');
            return client
              .query(featureQuery)
              .then((resp) => {
                // console.log(resp);
                // console.timeEnd('select feature from DB');
                for (let i = 0; i < resp.rows.length; i++) {
                  products[i].features.push(
                    resp.rows[i].feature0,
                    resp.rows[i].feature1,
                    resp.rows[i].feature2,
                    resp.rows[i].feature3,
                    resp.rows[i].feature4
                  );
                }
              });
          })
          .catch((err) => {
            console.error(err);
          })
          .then(() => {
            client.end();
            return resolve(products);
          })
          .catch((err) => {
            console.log(err);
            return reject(err);
          });
      });
  });


};

const getSimilarItems = () => {
  return new Promise ((resolve, reject) => {
    pool.connect()
      .then(client => {
        let similarItemsQuery = "SELECT * FROM products WHERE department ='camping' LIMIT 12";
        console.time('select similar items from DB:');
        return client
          .query(similarItemsQuery)
          .then((response) => {
            console.timeEnd('select similar items from DB:');
            client.end();
            return resolve(response.rows);
          })
          .catch((err) => {
            return reject(err);
          });
      });
  });
};

module.exports = {
  getProduct,
  getSimilarItems
};