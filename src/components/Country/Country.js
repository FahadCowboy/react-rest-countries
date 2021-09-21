import React from 'react';
import './Country.css'

const Country = props => {
   const {name, flag, capital, population, region} = props.country
   return (
      <div className="each-country">
         <h2>{name}</h2>
         <div className="img-wrapper">
            <img src={flag} alt="" />
         </div>
         <p><span>Capital:</span> {capital}</p>
         <p><span>Population:</span> {population}</p>
         <p><span>Region:</span> {region}</p>
      </div>
   );
};

export default Country;