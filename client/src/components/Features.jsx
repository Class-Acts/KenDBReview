import React from 'react';

import FeaturesItem from './FeaturesItem.jsx';


const Features = (props) => {
  return (
    <div className={props.style.features}>
      <h3 className={props.style.featureTitle}>Features</h3>
      <ul>
        {props.features.map(feature => <FeaturesItem feature={feature} style={props.style}/>)}
      </ul>
    </div>
  );
};
export default Features;