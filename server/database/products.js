const db = require('./index.js');


module.exports = {
  getAll: (cb) => {

    var id; var brand; var name; var rating; var price; var description; var photoURL; var feature1; var feature2; var feature3; var feature4;

    let queryString = `SELECT * from products WHERE id=${count}`;

    db.query(queryString, [], (err, data) => {
      if (err) {
        console.log(err);
      }

      id = data[0].id;
      brand = data[0].brand;
      name = data[0].name;
      rating = data[0].rating;
      price = data[0].price;
      description = data[0].description;
      photoURL = data[0].photoURL;
      const featureQuery = `SELECT * from features WHERE prod_id=${data[0].id}`;

      db.query(featureQuery, [], (err, results) => {
        if (err) {
          console.log(err);
        }

        feature1 = results[0].feature;
        feature2 = results[1].feature;
        feature3 = results[2].feature;
        feature4 = results[3].feature;
        let product = {id: id, brand: brand, name: name, rating: rating, price: price, description: description, photoURL: photoURL, feature1: feature1, feature2: feature2, feature3: feature3, feature4: feature4};


        cb(null, product);

      });
    });
  }
};