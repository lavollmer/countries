import '../App.css';

function CountryCard({ country, imageUrl, population, region, capital, onClick, index }) {
  return (
    <div className='countries-card' onClick={() => onClick(index)}>
      <div className='country-image'>
        <img src={imageUrl} alt={`${country} flag`} className='country-flag' />
      </div>
      <div className='country-name'>
        <h1>{country}</h1>
      </div>
      <div className='country-detail-card'>
        <div className='country-detail-row'>
          <p className='country-detail'>Population:  </p>
          <p className='country-detail-actual'> {population}</p>
        </div>
        <div className='country-detail-row'>
          <p className='country-detail'>Region:  </p>
          <p className='country-detail-actual'> {region}</p>
        </div>
        <div className='country-detail-row'>
          <p className='country-detail'>Capital:  </p>
          <p className='country-detail-actual'> {capital}</p>
        </div>
      </div>
    </div>
  )
}

export default CountryCard;