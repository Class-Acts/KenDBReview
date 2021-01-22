const db = require('./index');

class Model {
  dropDB() {
    return db.queryAsync('DROP DATABASE rgi');
  }

  createSchema() {
    return db.queryAsync('CREATE DATABASE IF NOT EXISTS rgi')
      .then(() => db.queryAsync('USE rgi'))
      .then(() => db.queryAsync(
        `CREATE TABLE products (
          id int auto_increment primary key,
          brand text,
          name text,
          rating int,
          price int,
          description text,
          photoURL text
        )`
      ))
      .then(() => db.queryAsync(
        `CREATE TABLE features (
          id int auto_increment primary key,
          feature text,
          prod_id int,
          foreign key(prod_id) references products(id)
        )`
      ))
      .then(() => db.queryAsync(
        `CREATE TABLE backpacks (
          id int auto_increment primary key,
          photoURL text
        )`
      ));
  }
  insert(product) {
    const queryString = `INSERT INTO products (brand, name, rating, price, description, photoURL) VALUES('${product.brand}', '${product.name}', '${product.rating}', '${product.price}', '${product.description}', '${product.photo}')`;
    return db.queryAsync(queryString);
  }
  insertFeatures(obj, id) {
    const features = `INSERT INTO features (feature, prod_id) VALUES('${obj.one}', '${Number.parseInt(id)}'), ('${obj.two}', '${Number.parseInt(id)}'), ('${obj.three}', '${Number.parseInt(id)}'), ('${obj.four}', '${Number.parseInt(id)}'), ('${obj.five}', '${Number.parseInt(id)}')`;
    return db.queryAsync(features);
  }

  insertBackpacks(item) {
    const backpackQuery = `INSERT INTO backpacks (photoURL) VALUES('${item}')`;
    return db.queryAsync(backpackQuery);
  }

  getAll(id) {
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
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }

  end() {
    return db.endAsync();
  }

}

module.exports = Model;

