const axios = require('axios');


//create a pictures array to add the URLs to after getting them back from pixabay API
const picUrls = [];
//axios configuration with my API key and headers for pixabay
var config = {
  method: 'get',
  url: 'https://pixabay.com/api/?key=19605739-56c524e836fa602ebf242564e&q=boots&per_page=70&image_type=photo\n',
  headers: {
    'Cookie': '__cfduid=d6015487e3597264bb5e22389fdf9c6f21608523882; anonymous_user_id=d3fd6b64-2d2b-4719-a3e1-b1afe5107fec; __cf_bm=3e034b692c35b21e9bfa9ddf087b9699ae20d00f-1609211389-1800-AYgFLcix04hhdH+Ako1ZjHDWP2OlJmDlknj0LPr6ExMkvxlZxRJ7v3sMnYoxRzevcdS+jXDb8aEpw+uperII0J4='
  }
};
//make axios get request to pixabay for 70 random images of 'boots'. If request is a success the respnse will be an array of object each containing the info for the individual photos. Iterate over that array and for each photo add the thumbnail/"previewURL" url into the picUrls array to be exported for use in seed.js
module.exports.get = () => {
  return axios(config)
    .then(resp => {
      let pics = resp.data.hits;
      for (let i = 0; i < pics.length; i++) {
        picUrls.push(pics[i].previewURL);
      }
    })
    .catch(err => console.log(err));
};

module.exports.pictures = {picUrls};