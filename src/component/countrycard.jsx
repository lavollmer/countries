import '../App.css';

function CountryCard ({country, imageUrl, population, region, capital}) {
    return (
        <div className='countries-card'>
          <div className='country-image'>
            <image src={imageUrl}></image>
          </div>
          <div className='country-name'>
            <h1>{country}</h1>
          </div>
          <div className='country-detail-row'>
            <p className='country-detail'>Population: </p>
            <p>{population}</p>
          </div>
          <div className='country-detail-row'>
            <p className='country-detail'>Region: </p>
            <p>{region}</p>
          </div>
          <div className='country-detail-row'>
            <p className='country-detail'>Capital: </p>
            <p>{capital}</p>
          </div>

        </div>
    )
}

export default CountryCard;