import React from 'react';
import axios from 'axios';

import css from './App.css';
import Features from './Features.jsx';
import TechSpecs from './TechSpecs.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      features: [],
      specs: ['Best Use', 'Footwear Closure', 'Waterproof', 'Upper', 'Lining', 'Midsole', 'Support'],
      brand: '',
      name: '',
      description: ''
    };
  }

  componentDidMount() {
    axios.get('/products')
      .then(axiosResp => {
        this.setState({products: axiosResp.data, description: axiosResp.data[0].description, features: axiosResp.data[0].features});
      });
  }

  render() {
    return (
      <div>
        <p className={css.description}>{this.state.description}</p>
        <div className={css.features_specs}>
          <Features features={this.state.features} style={css}/>
          <TechSpecs specs={this.state.specs} style={css}/>
        </div>
      </div>
    );
  }
}

export default App;