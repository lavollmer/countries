import '../App.css';
import { FaArrowLeft } from "react-icons/fa6";

const countrypage = ({ imageUrl, country, population, region, capital }) => {
  return (
    <div className='background-page'>
      <div className='header'>
        <h1 className='title'>Where in the world?</h1>
      </div>
      <div className='button-container'>
        <button className='button'><FaArrowLeft /> Back</button>
      </div>
      <div>
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
    </div>
  )
}

export default countrypage