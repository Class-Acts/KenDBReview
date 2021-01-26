import React from 'react';
import StarRatings from 'react-star-ratings';

import css from './BoughtTogetherItem.css';

class BoughtTogetherItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: props.rating
    };
  }
  render() {

    return (
      <li className={css.BTlistItem} >
        <div className={css.BTitemDiv} >
          <img src={this.props.photoURL} className={css.boughtTogetherImg}/>
          <div className={css.BTbrand}>{this.props.brand}</div>
          <div className={css.BTname}>{this.props.name}</div>
          <StarRatings
            rating={this.state.rating}
            starRatedColor="gold"
            numberOfStars={5}
            starDimension="15px"
            starsSpacing="0px"
          />
          <div>${this.props.price}.99</div>
        </div>
      </li>

    );
  }
}


export default BoughtTogetherItem;