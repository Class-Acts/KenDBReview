const express = require('express');
const path = require('path');
const axios = require('axios');

const db = require('./database/products.js');

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/products', (req, res) => {
  let products = [];
  let query = (count) => {

    return db.getAll(count)
      .then(data => products.push(data))
      .then(() => {
        if (products.length === 12) {
          // console.log('ubrivbbviebviuebviebvuiebvujebvjubhe', products);
          console.log(products);
          res.write(JSON.stringify(products));
          res.end();
        }
      })
      .catch(err => {
        res.writeHead(404);
        res.end();
      });

  };
  var nTimes = function(count, func) {
    for (var x = 0; count > x; x++) {
      func(x + 1);
    }
  };
  nTimes(12, query);
  // console.log(products);

});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

