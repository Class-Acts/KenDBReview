// import React from 'react';

// import css from './SimilarProducts.css';
// import SimilarProductsList from './SimilarProductsListItem.jsx';
// import rightArrow from './carouselArrowPics/rightArrow.png';
// import leftArrow from './carouselArrowPics/leftArrow.png';


// class SimilarProducts extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentImageIndex: 0,
//       products: [],
//       arrowNext: rightArrow,
//       arrowPrev: leftArrow
//     };
//     // this.nextSlide = this.nextSlide.bind(this);
//     // this.prevSlide = this.prevSlide.bind(this);
//   }
//   componentDidMount() {
//     console.log(this.props)
//     this.setState({products: this.props.products});
//   }
//   render() {
//     return (
//       <div>
//         <h3 className={css.peopleAlsoLikedTitle}>People also liked</h3>
//         <div className={css.listWrapper}>
//           <ul className={css.horizontalList}>
//             {this.state.products.map(product => <SimilarProductsListItem photoURL={product.photoURL} brand={product.brand} name={product.name} rating={product.rating} price={product.price} style={css}/>)}
//           </ul>
//         </div>
//       </div>
//     );
//   }
// }

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
          {props.products.map(product => <SimilarProductsListItem photoURL={product.photoURL} brand={product.brand} name={product.name} rating={product.rating} price={product.price} style={css}/>)}
          <img src={rightArrow} onClick={props.nextSlide} />
        </ul>
      </div>
    </div>
  );
};

export default SimilarProducts;