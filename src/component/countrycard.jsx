import React from 'react';
import '../App.css';

const CountryCard ({title, imageUrl, description}) => {
    return (
        <div className='countries-card'>
          <div className='country-image'>
            <p>IMAGE</p>
          </div>
          <div className='country-name'>
            <h1>Country Name</h1>
          </div>
          <div className='country-detail-row'>
            <p className='country-detail'>Population: </p>
            <p>POP DEETS</p>
          </div>
          <div className='country-detail-row'>
            <p className='country-detail'>Region: </p>
            <p>REGION</p>
          </div>
          <div className='country-detail-row'>
            <p className='country-detail'>Capital: </p>
            <p>CAPITAL</p>
          </div>

        </div>
    )
}

export default CountryCard;