import React from 'react';

// import TechSpecsItem from './TechSpecsItem.jsx';


const TechSpecs = (props) => {
  // console.log(props);
  return (
    <div className={props.style.specs}>
      <h3 className={props.style.specsTitle}>Technical specs</h3>
      <table>
        <tr>
          <th>Best Use</th>
          <td>Hiking</td>
        </tr>
        <tr>
          <th>Footwear Height</th>
          <td>Over-the-ankle</td>
        </tr>
        <tr>
          <th>Footwear Closure</th>
          <td>Lace-up</td>
        </tr>
        <tr>
          <th>Waterproof</th>
          <td>Yes</td>
        </tr>
        <tr>
          <th>Upper</th>
          <td>Nubuck leather/textile</td>
        </tr>
        <tr>
          <th>Midsole</th>
          <td>Dual density EVA</td>
        </tr>
        <tr>
          <th>Support</th>
          <td>4D Advanced Chassis</td>
        </tr>
        <tr>
          <th>Outsole</th>
          <td>Contagrip rubber</td>
        </tr>
        <tr>
          <th>Weight(Pair)</th>
          <td>2lbs. 13.2 oz.</td>
        </tr>
        <tr>
          <th>Gender</th>
          <td>Unisex</td>
        </tr>
      </table>
    </div>
  );
};
export default TechSpecs;

{/* <ul>
        {props.features.map(feature => <FeaturesItem feature={feature} style={props.style}/>)}
      </ul> */}