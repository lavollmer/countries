import '../App.css';

function CountryCard ({country, imageUrl, population, region, capital}) {
    return (
        <div className='countries-card'>
          <div className='country-image'>
            <h1>Image Flag</h1>
            <image src={imageUrl} alt="Country Image"></image>
          </div>
          <div className='country-name'>
            <h1>Country</h1>
            <h1>{name}</h1>
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