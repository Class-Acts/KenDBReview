const express = require('express');
const path = require('path');
const axios = require('axios');

const Model = require('./database/model.js');

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

const db = new Model();

app.get('/api/products', (req, res) => {
  let products = [];
  let query = (count) => {

    return db.getAll(count)
      .then(data => products.push(data))
      .then(() => {
        if (products.length === 12) {
          res.write(JSON.stringify(products));
          res.end();
        }
      })
      .catch(err => {
        res.status(404).end();
        console.log(err);
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
app.get('/api/boughtTogether', (req, res) => {
  // console.log
  db.getAllBoughtTogether()
    .then(resp => {
      res.send(JSON.stringify(resp[0]));
    })
    .catch((err) => {
      res.status(404).end();
      console.log(err);
    });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

