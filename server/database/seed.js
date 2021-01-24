const faker = require('faker');
const Model = require('./model.js');
const boots = require('../../productPics.json');
const backpacks = require('../../backpackPicks.json');

const model = new Model();
const num = 19;

const generateBoots = (numBoots) => {
  var productsArr = [];
  var product;
  for (let i = 0; i < numBoots; i++) {
    product = {
      brand: faker.company.companyName(),
      name: faker.commerce.productName(),
      rating: Math.floor(Math.random() * (5 - 1 + 1)) + 1,
      price: Math.floor(Math.random() * (200 - 50 + 1)) + 50,
      description: faker.lorem.paragraph(),
      photo: boots[i]
    };
    productsArr.push(product);
  }
  return productsArr;

};
const generateFeatures = (numFeats) => {
  var featsArr = [];
  var feat;
  for (let i = 0; i < numFeats; i++) {
    feat = {
      id: i + 1,
      one: faker.lorem.sentences(),
      two: faker.lorem.sentences(),
      three: faker.lorem.sentences(),
      four: faker.lorem.sentences(),
      five: faker.lorem.sentences()
    };
    featsArr.push(feat);
  }
  return featsArr;
};
const generateBackpacks = (numBags) => {
  var boughtTogetherArr = [];
  var prod;
  for (var j = 0; j < numBags; j++) {
    prod = {
      brand: faker.company.companyName(),
      name: faker.commerce.productName(),
      rating: Math.floor(Math.random() * (5 - 1 + 1)) + 1,
      price: Math.floor(Math.random() * (200 - 50 + 1)) + 50,
      photo: backpacks[j]
    };
    boughtTogetherArr.push(prod);
  }
  return boughtTogetherArr;
};

const addBoots = (boots) => {
  let bootInserts = [];
  for (let boot of boots) {
    bootInserts.push(model.insertBoots(boot));
  }
  return Promise.all(bootInserts);
};
const addFeatures = (features) => {
  let featsInserts = [];
  for (let feat of features) {
    featsInserts.push(model.insertFeatures(feat));
  }
  return Promise.all(featsInserts);
};
const addBackpacks = (backpacks) => {
  let bagInserts = [];
  for (let bag of backpacks) {
    bagInserts.push(model.insertBackpacks(bag));
  }
  return Promise.all(bagInserts);
};

const randomBoots = generateBoots(num);
const randomFeatures = generateFeatures(num);
const randomBackpacks = generateBackpacks(num);

model.dropDB()
  .then(() => model.createSchema())
  .then(() => addBoots(randomBoots))
  .then(() => addFeatures(randomFeatures))
  .then(() => addBackpacks(randomBackpacks))
  .catch(err => console.log(err))
  .then(() => model.end());



// model.dropDB()
//   .then(() => model.createSchema())
//   .then(resp => {
//     var productsArr = [];
//     //create temp variables for the product itself then a random number to be generated for each iteration that will represent the index in the pics array that was returned from the first promise
//     var product;
//     //iterate from 0 - 99 eachtime creating that products object and populating the properties with random fake data using faker.js library
//     for (let i = 0; i < 20; i++) {
//       product = {
//         brand: faker.company.companyName(),
//         name: faker.commerce.productName(),
//         rating: Math.floor(Math.random() * (5 - 1 + 1)) + 1,
//         price: Math.floor(Math.random() * (200 - 50 + 1)) + 50,
//         description: faker.lorem.paragraph(),
//         photo: boots[i],
//         features: {
//           one: faker.lorem.sentences(),
//           two: faker.lorem.sentences(),
//           three: faker.lorem.sentences(),
//           four: faker.lorem.sentences(),
//           five: faker.lorem.sentences()
//         }
//       };
//       //add each product to the productsArr
//       productsArr.push(product);
//     }
//     return productsArr;
//   })
//   .then(array => {
//     let seedFunc = (count) => {
//       return model.insert(array[count])
//         .then(resp => {
//           model.insertFeatures(array[count].features, resp[0].insertId);
//         })
//         .catch(err => console.log(err));
//     };
//     var nTimes = function(count, func) {
//       for (var x = 0; count > x; x++) {
//         func(x);
//       }
//     };
//     nTimes(20, seedFunc);
//   })
//   .then(() => {
//     var boughtTogetherArr = [];
//     var prod;
//     for (var j = 0; j < 18; j++) {
//       prod = {
//         brand: faker.company.companyName(),
//         name: faker.commerce.productName(),
//         rating: Math.floor(Math.random() * (5 - 1 + 1)) + 1,
//         price: Math.floor(Math.random() * (200 - 50 + 1)) + 50,
//         photo: backpacks[j]
//       };
//       boughtTogetherArr.push(prod);
//     }
//     console.log(boughtTogetherArr);
//     return boughtTogetherArr;
//   })
//   .then(arr => {
//     let backpackFunc = (count) => {
//       return model.insertBackpacks(arr[count]);
//     };
//     var xTimes = function(count, func) {
//       for (var x = 0; count > x; x++) {
//         func(x);
//       }
//     };
//     xTimes(18, backpackFunc);
//   })
//   // .then(() => model.end())
//   .catch(err => console.log(err));
// // .finally(() => {
// //   model.end();
// // });