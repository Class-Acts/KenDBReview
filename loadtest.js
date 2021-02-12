import http from 'k6/http';

export default function() {
  var random = Math.floor(Math.random() * (10000000 - 1) + 1);
  var url = 'http://localhost:8080/api/products';
  var params = {
    index: random
  };

  http.get(url, params);
}

