const express = require('express');
const path = require('path');
const axios = require('axios');

const db = require('./database/products.js');

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/products', (req, res) => {
  console.log('HEEELLLLOOO WOOORRLLLDDD');
  db.getAll((err, result) => {
    console.log(result);
    if (err) {
      res.writeHead(404);
      res.end()
    } else {
      res.write(JSON.stringify(result));
      res.end();
    }
  });

});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

