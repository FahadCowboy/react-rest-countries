import React from 'react';
import { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
   const [countries, setCountries] = useState([])
  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/all`)
      .then(response => response.json())
      .then(data => setCountries(data))
  }, [])
  
   return (
      <div>
         <h2>Rest Countries</h2>
         <p>Countris found: {countries.length}</p>
         <div className="countries-wrapper">
            {
               countries.map(country => <Country key={country.name} country={country}></Country>)
            }
         </div>
      </div>
   );
};

export default Countries;