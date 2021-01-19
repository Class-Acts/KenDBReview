import React from 'react';

const FeaturesItem = (props) => {
  return (
    <div>
      <li className={props.style.feature}>{props.feature}</li>
    </div>
  );
};

export default FeaturesItem;