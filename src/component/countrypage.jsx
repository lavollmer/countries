import '../App.css';
import { FaArrowLeft } from "react-icons/fa6";
import {useLocation, useNavigate} from 'react-router-dom';

const countrypage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { countryName: country, countryImage: imageUrl } = location.state || {};
  const population = location.state?.countryData?.population || 'N/A';
  const region = location.state?.countryData?.region || 'N/A';
  const capital = location.state?.countryData?.capital || 'N/A';


  if (!countryData) {
    return (
      <div>
        <p>No country data provided</p>
        <button onClick={() => navigate('/')}>Go Back</button>
      </div>
    );
  }

  const handleBackClick = () => {
    // Handle back button click
    window.history.back();
  }

  
  return (
    <div className='background-page'>
      <div className='header'>
        <h1 className='title'>Where in the world?</h1>
      </div>
      <div className='button-container' onClick={handleBackClick}>
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