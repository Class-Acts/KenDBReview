import React from 'react';
import axios from 'axios';

import BoughtTogetherItem from './BoughtTogetherItem.jsx';
import css from './BoughtTogether.css';

import rightArrow from './carouselArrowPics/RealRight.png';
import leftArrow from './carouselArrowPics/RealLeft.png';

class BoughtTogether extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      currentProductIndex: 0
    };
    this.prevSlide = this.prevSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
  }
  componentDidMount() {
    axios.get('http://localhost:8080/api/boughtTogether')
      .then((resp) => {
        this.setState({products: resp.data});
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

  render() {
    const index = this.state.currentProductIndex;
    let firstSixProducts = this.state.products.slice(index, index + 6);
    if (firstSixProducts.length < 6) {
      firstSixProducts = firstSixProducts.concat(this.state.products.slice(0, 6 - firstSixProducts.length));
    }
    return (
      <div>
        <h3 className={css.boughtTogetherTitle}>Frequently Bought Together</h3>
        <div className={css.carouselContainer}>
          <div className={css.BTlistWrapper}>
            <ul className={css.BThorizontalList}>
              <img src={leftArrow} onClick={this.prevSlide} className={css.boughtTogetherButton}/>
              {firstSixProducts.map(product => <BoughtTogetherItem key={product.brand} photoURL={product.photoURL} brand={product.brand} name={product.name} rating={product.rating} price={product.price} style={css}/>)}
              <img src={rightArrow} onClick={this.nextSlide} className={css.boughtTogetherButton}/>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default BoughtTogether;