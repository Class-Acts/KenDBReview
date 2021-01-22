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

  end() {
    return db.endAsync();
  }

}

module.exports = Model;

