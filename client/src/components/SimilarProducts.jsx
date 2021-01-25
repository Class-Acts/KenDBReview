import React from 'react';

import SimilarProductsListItem from './SimilarProductsListItem.jsx';
import css from './SimilarProducts.css';
import rightArrow from './carouselArrowPics/RealRight.png';
import leftArrow from './carouselArrowPics/RealLeft.png';


const SimilarProducts = (props) => {
  return (
    <div>
      <h3 className={css.peopleAlsoLikedTitle}>People also liked</h3>
      <div className={css.listWrapper}>
        <ul className={css.horizontalList}>
          <img src={leftArrow} onClick={props.prevSlide} />
          {props.products.map(product => <SimilarProductsListItem key={product.brand} photoURL={product.photoURL} brand={product.brand} name={product.name} rating={product.rating} price={product.price} description={product.description} features={product.features} handleItemClick={props.handleListItemClick} style={css}/>)}
          <img src={rightArrow} onClick={props.nextSlide} />
        </ul>
      </div>
    </div>
  );
};

export default SimilarProducts;