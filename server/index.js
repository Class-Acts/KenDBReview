const express = require('express');
const path = require('path');
const axios = require('axios');

const db = require('./database');

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

