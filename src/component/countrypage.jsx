import '../App.css';
import { FaArrowLeft } from "react-icons/fa6";
import { useLocation, useNavigate } from 'react-router-dom';

const countrypage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const item = location.state?.country;

  if (!item) {
    return (
      <div>
        <p>No country data provided</p>
        <button onClick={() => navigate('/')}>
          <FaArrowLeft /> Go Back
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className='header'>
        <h1 className='title'>Where in the world?</h1>
      </div>
      <div className="individual-background-page">
        <button className='go-back-button' onClick={() => navigate(-1)}><FaArrowLeft />Back</button>
        <div className="individual-country-card">
          <div className="individual-country-image">
            <img src={item.flags.svg} alt={`${item.name.common} flag`} />
          </div>
          <div className="individual-country-details">
            <h1>{item.name.common}</h1>
            <p><strong>Population:</strong> {item.population.toLocaleString()}</p>
            <p><strong>Region:</strong> {item.region}</p>
            <p><strong>Capital:</strong> {item.capital?.[0] || 'N/A'}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default countrypage