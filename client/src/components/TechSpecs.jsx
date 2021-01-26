import React from 'react';


const TechSpecs = (props) => {
  return (
    <div className={props.style.specs}>
      <h3 className={props.style.specsTitle}>Technical specs</h3>
      <table className={props.style.specTable}>
        <tr>
          <th className={props.style.specTH}>Best Use</th>
          <td className={props.style.specTD}>Hiking</td>
        </tr>
        <tr>
          <th className={props.style.specTH}>Footwear Height</th>
          <td className={props.style.specTD}>Over-the-ankle</td>
        </tr>
        <tr>
          <th className={props.style.specTH}>Footwear Closure</th>
          <td className={props.style.specTD}>Lace-up</td>
        </tr>
        <tr>
          <th className={props.style.specTH}>Waterproof</th>
          <td className={props.style.specTD}>Yes</td>
        </tr>
        <tr>
          <th className={props.style.specTH}>Upper</th>
          <td className={props.style.specTD}>Nubuck leather/textile</td>
        </tr>
        <tr>
          <th className={props.style.specTH}>Midsole</th>
          <td className={props.style.specTD}>Dual density EVA</td>
        </tr>
        <tr>
          <th className={props.style.specTH}>Support</th>
          <td className={props.style.specTD}>4D Advanced Chassis</td>
        </tr>
        <tr>
          <th className={props.style.specTH}>Outsole</th>
          <td className={props.style.specTD}>Contagrip rubber</td>
        </tr>
        <tr>
          <th className={props.style.specTH}>Weight(Pair)</th>
          <td className={props.style.specTD}>2lbs. 13.2 oz.</td>
        </tr>
        <tr>
          <th className={props.style.specTH}>Gender</th>
          <td className={props.style.specTD}>Unisex</td>
        </tr>
      </table>
    </div>
  );
};
export default TechSpecs;