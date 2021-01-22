const faker = require('faker');
const Model = require('./model.js');
const boots = require('../../productPics.json');
const backpacks = require('../../backpackPicks.json');

const model = new Model();

model.dropDB()
  .then(() => model.createSchema())
  // .then(() => pics.getBoots())
  .then(resp => {
    var productsArr = [];
    //create temp variables for the product itself then a random number to be generated for each iteration that will represent the index in the pics array that was returned from the first promise
    var product;
    var randomNumber;
    //iterate from 0 - 99 eachtime creating that products object and populating the properties with random fake data using faker.js library
    for (let i = 0; i < 20; i++) {
      randomNumber = Math.floor(Math.random() * (20 - 0 + 1)) + 0;
      product = {
        brand: faker.company.companyName(),
        name: faker.commerce.productName(),
        rating: Math.floor(Math.random() * (5 - 1 + 1)) + 1,
        price: Math.floor(Math.random() * (200 - 50 + 1)) + 50,
        description: faker.lorem.paragraph(),
        photo: boots[i],
        features: {
          one: faker.lorem.sentences(),
          two: faker.lorem.sentences(),
          three: faker.lorem.sentences(),
          four: faker.lorem.sentences(),
          five: faker.lorem.sentences()
        }
      };
      //add each product to the productsArr
      productsArr.push(product);
    }
    return productsArr;
  })
  .then(array => {
    let seedFunc = (count) => {
      return model.insert(array[count])
        .then(resp => {
          model.insertFeatures(array[count].features, resp[0].insertId);
        })
        .catch(err => console.log(err));
    };
    var nTimes = function(count, func) {
      for (var x = 0; count > x; x++) {
        func(x);
      }
    };
    nTimes(20, seedFunc);
  })
  // .then(() => pics.getBackpacks())
  .then(arr => {
    let backpackFunc = (count) => {
      return model.insertBackpacks(backpacks[count]);
    };
    var xTimes = function(count, func) {
      for (var x = 0; count > x; x++) {
        func(x);
      }
    };
    xTimes(18, backpackFunc);
  })
  // .then(() => model.end())
  .catch(err => console.log(err));