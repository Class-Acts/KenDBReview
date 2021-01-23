import React from 'react';
import axios from 'axios';

class BoughtTogether extends React.Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    axios.get('/boughtTogether')
      .then((resp) => console.log(resp))
      .catch(err => console.log(err));
  }


  render() {
    return (
      <div>
        <h3>Frequently Bought Together</h3>
      </div>
    );
  }
}

export default BoughtTogether;