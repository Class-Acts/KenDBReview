const faker = require('faker');
const db = require('./index');
const pics = require('./pics');

// make get function in pics.js if that function is a success it will return me an array containing 70 picture URLs
pics.get()
  .then(resp => {
    // create an empty products array to add a perfectly formatted object containing all the info about each product to be added to the database
    var productsArr = [];
    //create temp variables for the product itself then a random number to be generated for each iteration that will represent the index in the pics array that was returned from the first promise
    var product;
    var randomNumber;
    //iterate from 0 - 99 eachtime creating that products object and populating the properties with random fake data using faker.js library
    for (let i = 0; i < 100; i++) {
      randomNumber = Math.floor(Math.random() * (70 - 0 + 1)) + 0;
      product = {
        brand: faker.lorem.word(),
        name: faker.lorem.words(),
        rating: Math.floor(Math.random() * (5 - 0 + 1)) + 0,
        price: Math.floor(Math.random() * (200 - 50 + 1)) + 50,
        description: faker.lorem.paragraph(),
        photo: pics.pictures.picUrls[randomNumber],
        features: {
          one: faker.lorem.sentence(),
          two: faker.lorem.sentence(),
          three: faker.lorem.sentence(),
          four: faker.lorem.sentence()
        }
      };
      //add each product to the productsArr
      productsArr.push(product);
    }
    //once the loop has finished the productsArr will contain 100n products, return it to be used in the next function
    return productsArr;
  })
  .then(array => {
    //iterate over the productsArr
    for (let i = 0; i < array.length; i++) {
      //temp id variable
      var productId;
      //insert statement for the products table
      const queryString = `INSERT INTO products (brand, name, rating, price, description, photoURL) VALUES('${array[i].brand}', '${array[i].name}', '${array[i].rating}', '${array[i].price}', '${array[i].description}', '${array[i].photo}')`;
      //insert those properties
      db.query(queryString, [], (err, data) => {
        if (err) {
          console.log(err);
        }
        //save the id of the inserted product to be used as the foriegn key in the features table to like those four features to their correct product
        productId = data.insertId;
        //inset statement for features table
        let features = `INSERT INTO features (feature, prod_id) VALUES('${array[i].features.one}', '${Number.parseInt(productId)}'), ('${array[i].features.two}', '${Number.parseInt(productId)}'), ('${array[i].features.three}', '${Number.parseInt(productId)}'), ('${array[i].features.four}', '${Number.parseInt(productId)}')`;
        db.query(features, [], (err, results) => {
          if (err) {
            console.log(err);
          } else {
            console.log('WWWWWWWOOOOORRRRRKKKKEEEEDDDD');
          }
        });
      });
    }

  })
  .catch(err => console.log(err));