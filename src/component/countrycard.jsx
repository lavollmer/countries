import '../App.css';

function CountryCard({ country, imageUrl, population, region, capital, onClick, index }) {
  const formattedPopulation = population.toLocaleString();
  return (
    <div className='countries-card' onClick={() => onClick(index)}>
      <div className='country-image'>
        <img src={imageUrl} alt={`${country} flag`} className='country-flag' />
      </div>
      <div className='country-name'>
        <h1>{`Country: ${country}`}</h1>
      </div>
      <div className='country-detail-card'>
        <div className='country-detail-row'>
          <p className='country-detail'>{`Population: ${formattedPopulation}`}</p>
        </div>
        <div className='country-detail-row'>
          <p className='country-detail'>{`Region: ${region}`}</p>
        </div>
        <div className='country-detail-row'>
          <p className='country-detail'>{`Capital: ${capital}`}</p>
        </div>
      </div>
    </div>
  )
}

export default CountryCard;