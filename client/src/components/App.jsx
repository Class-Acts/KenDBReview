import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios.get('/products')
      .then(axiosResp => console.log(axiosResp));
  }

  render() {
    return (
      <div>
        <h1>Hello World Im React</h1>
      </div>
    )
  }
}

export default App;