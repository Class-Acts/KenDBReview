import React from 'react';
import StarRatings from 'react-star-ratings';

import css from './SimilarProductsItem.css';

class SimilarProductsListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: props.rating
    };
  }
  render() {

    return (
      <li className={css.listItem} >
        <div className={css.itemDiv} onClick={this.props.handleItemClick} >

          <img src={this.props.photoURL} description={this.props.description} features={[this.props.features]} className={css.carouselImg}/>
          <div className={css.brand}>{this.props.brand}</div>
          <div className={css.name}>{this.props.name}</div>
          <StarRatings
            rating={this.state.rating}
            starRatedColor="gold"
            numberOfStars={5}
            starDimension="15px"
            starsSpacing="0px"
          />
          <div>${this.props.price}.00</div>
        </div>
      </li>

    );
  }
}


export default SimilarProductsListItem;