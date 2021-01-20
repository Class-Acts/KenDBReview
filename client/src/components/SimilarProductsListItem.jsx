import React from 'react';

import css from './SimilarProductsItem.css'

const SimilarProductsListItem = (props) => {
  return (
    <li className={css.listItem}>
      <img src={props.photoURL} />
    </li>

  );
};


export default SimilarProductsListItem;