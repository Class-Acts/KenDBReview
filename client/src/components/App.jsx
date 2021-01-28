import React from 'react';
import axios from 'axios';

import css from './App.css';
import Features from './Features.jsx';
import TechSpecs from './TechSpecs.jsx';
import SimilarProducts from './SimilarProducts';
import SizeTable from './SizeTable.jsx';
import BoughtTogether from './BoughtTogether.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      features: [],
      description: '',
      currentProductIndex: 0,
    };
    this.prevSlide = this.prevSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.handleListItemClick = this.handleListItemClick.bind(this);
  }
  componentDidMount() {
    axios.get('http://localhost:8080/api/products')
      .then(axiosResp => {
        this.setState({products: axiosResp.data, description: axiosResp.data[0].description, features: axiosResp.data[0].features});
      })
      .catch(err => console.log(err));
  }
  prevSlide() {
    const lastIndex = this.state.products.length - 1;
    const resetIndex = this.state.currentProductIndex === 0;
    const index = resetIndex ? lastIndex : this.state.currentProductIndex - 1;
    this.setState({
      currentProductIndex: index
    });
  }
  nextSlide() {
    const lastIndex = this.state.products.length - 1;
    const resetIndex = this.state.currentProductIndex === lastIndex;
    const index = resetIndex ? 0 : this.state.currentProductIndex + 1;
    this.setState({currentProductIndex: index});
  }
  handleListItemClick(e) {
    e.persist();
    const des = e.target.attributes.description.nodeValue;
    const feat = e.target.attributes.features.nodeValue.split(',');
    this.setState({description: des, features: feat});
  }

  render() {
    const index = this.state.currentProductIndex;
    let firstSixProducts = this.state.products.slice(index, index + 6);
    if (firstSixProducts.length < 6) {
      firstSixProducts = firstSixProducts.concat(this.state.products.slice(0, 6 - firstSixProducts.length));
    }
    return (
      <div className={css.appWrapper}>
        <div className={css.appContainer}>
          <p className={css.description}>{this.state.description}</p>
          <div className={css.featSpecFlex}>
            <div className={css.features_specs}>
              <Features features={this.state.features} style={css}/>
              <TechSpecs specs={this.state.specs} style={css}/>
            </div>
          </div>
          <SimilarProducts products={firstSixProducts} prevSlide={this.prevSlide} nextSlide={this.nextSlide} handleListItemClick={this.handleListItemClick}/>
          <div className={css.sizeBoughtTogether}>
            <SizeTable />
          </div>
          <div className={css.boughtTogether}>
            <BoughtTogether/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;