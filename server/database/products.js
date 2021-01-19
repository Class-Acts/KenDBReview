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

  }
};

// let products = [];

//     let populator = (count) => {
//       var id; var brand; var name; var rating; var price; var description; var photoURL; var feature1; var feature2; var feature3; var feature4;
//       let queryString = `SELECT * from products WHERE id=${count}`;
//       db.query(queryString, [], (err, data) => {
//         if (err) {
//           cb(err, null);
//         }

//         id = data[0].id;
//         brand = data[0].brand;
//         name = data[0].name;
//         rating = data[0].rating;
//         price = data[0].price;
//         description = data[0].description;
//         photoURL = data[0].photoURL;

//         const featureQuery = `SELECT * from features WHERE prod_id=${data[0].id}`;
//         db.query(featureQuery, [], (err, results) => {
//           if (err) {
//             cb(err, null);
//           }

//           feature1 = results[0].feature;
//           feature2 = results[1].feature;
//           feature3 = results[2].feature;
//           feature4 = results[3].feature;
//           let product = {id: id, brand: brand, name: name, rating: rating, price: price, description: description, photoURL: photoURL, feature1: feature1, feature2: feature2, feature3: feature3, feature4: feature4};


//           products.push(product);
//           console.log(products);
//         });
//       });
//     };

//     var nTimes = function(count, func) {
//       for (var x = 0; count > x; x++) {
//         func(count);
//       }
//     };
//     nTimes(12, populator);
//     cb(null, products);