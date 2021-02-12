require('newrelic');
const express = require('express');
const path = require('path');
const axios = require('axios');
const cors = require('cors');

// const Model = require('./database/model.js');
const { getProduct, getSimilarItems } = require('./postgres/index-pg.js');
// const db = new Model();

// db.connect()
//   .then(() => db.useDb());

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/api/products/:index', (req, res) => {
  let products = [];
  let index = req.params.index;

  getProduct(index)
    .then((products) => {
      res.write(JSON.stringify(products));
      res.end();
    })
    .catch(err => {
      res.status(404).end();
      console.log(err);
    });
});

app.get('/api/boughtTogether', (req, res) => {
  // console.log
  getSimilarItems()
    .then(resp => {
      res.send(JSON.stringify(resp));
    })
    .catch((err) => {
      res.status(404).end();
      console.log(err);
    });

  // db.getAllBoughtTogether()
  //   .then(resp => {
  //     res.send(JSON.stringify(resp[0]));
  //   })
  //   .catch((err) => {
  //     res.status(404).end();
  //     console.log(err);
  //   });

});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

