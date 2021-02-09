const fs = require('fs');
const faker = require('faker');
const argv = require('yargs').argv;

const lines = argv.lines || 1000;
const writeStream = fs.createWriteStream;

const departments = [
  'camping',
  'climbing',
  'hiking',
  'running',
  'travel'
];

const productCategories = [
  'Mens footwear',
  'Womens footwear',
  'jacket',
  'gear',
];

const seedProduct = () => {
  let departmentRandom = Math.floor(Math.random() * departments.length);
  let departmentData = departments[departmentRandom];

  let categoryRandom = Math.floor(Math.random() * productCategories.length);
  let productCategoryData = productCategories[categoryRandom];
  let brandData = faker.company.companyName();
  let productNameData = faker.commerce.productName();
  let descriptionData = faker.commerce.productDescription();
  let priceData = faker.commerce.price(9.99, 500);
  let reviewData = Math.floor(Math.random() * 50) / 10;
  let photoUrlData = faker.image.imageUrl();

  return `${departmentData},${productCategoryData},"${brandData}","${productNameData}","${descriptionData}",${priceData},${reviewData},${photoUrlData}\n`;
};

const seedDataFeatures = (num) => {
  let productId = num;
  let feature = faker.lorem.sentence();
  return `${productId}, "${feature}"\n`;
};

const seedDataBoughtTogether = (num) => {
  let departmentRandom = Math.floor(Math.random() * departments.length);
  let departmentData = departments[departmentRandom];
  let productId = num;
  let boughtTogether = Math.floor(Math.random() * (num - 1) + 1);
  return `${departmentData}, ${productId}, ${boughtTogether}\n`;
};

const startWriting = (writeStream, encoding, data, callback) => {
  let i = lines;
  const writing = () => {
    let canWrite = true;
    while (i >= 0 && canWrite) {
      // let data = seedProduct();
      if (i === 0) {
        writeStream.write(data(i), encoding, callback);
      } else {
        canWrite = writeStream.write(data(i), encoding);
      }
      i--;
      if (i > 0 && !canWrite) {
        writeStream.once('drain', writing);
      }
    }
  };
  writing();
};


const dataSeeding = () => {
  const writeStream = fs.createWriteStream('./csv/products.csv');
  console.time('working on products.csv');
  writeStream.write(
    'department, product_category, brand, product_name, description, price, review, photo_url\n',
    'utf-8'
  );
  startWriting(writeStream, 'utf-8', seedProduct, () => {
    console.timeEnd('working on products.csv');
    const writeStream = fs.createWriteStream('./csv/features.csv');
    console.time('working on features.csv');
    writeStream.write(
      'product_id, feature\n',
      'utf-8'
    );
    startWriting(writeStream, 'utf-8', seedDataFeatures, () => {
      console.timeEnd('working on features.csv');
      const writeStream = fs.createWriteStream('./csv/boughtTogether.csv');
      console.time('working on bought_together.csv');
      writeStream.write(
        'department, product_id, bought_together\n',
        'utf-8'
      );
      startWriting(writeStream, 'utf-8', seedDataBoughtTogether, () => {
        console.timeEnd('working on bought_together.csv');
        writeStream.end();
      });
    });
  });
};

dataSeeding();


