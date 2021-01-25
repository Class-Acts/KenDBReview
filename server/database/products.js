const db = require('./index.js');


module.exports = {

  getAll: (id) => {
    let queryString = `SELECT * from products WHERE id=${id}`;
    let product = {id: '', brand: '', name: '', rating: '', price: '', description: '', photoURL: '', features: []};
    return db.queryAsync(queryString)
      .then(resp => {
        product.id = resp[0][0].id;
        product.brand = resp[0][0].brand;
        product.name = resp[0][0].name;
        product.rating = resp[0][0].rating;
        product.price = resp[0][0].price;
        product.description = resp[0][0].description;
        product.photoURL = resp[0][0].photoURL;
        let featureQuery = `SELECT * from features WHERE prod_id=${resp[0][0].id}`;
        return db.queryAsync(featureQuery)
          .then(resp => {
            product.features[0] = resp[0][0].feature;
            product.features[1] = resp[0][1].feature;
            product.features[2] = resp[0][2].feature;
            product.features[3] = resp[0][3].feature;
            product.features[4] = resp[0][4].feature;
            return product;
          });
      });

  },

  getPhotos: () => {
    let queryString = 'SELECT id,brand,name,rating,price,photoURL FROM products LIMIT 12';
    return db.queryAsync(queryString)
      .catch(err => console.log(err));
  }
};
