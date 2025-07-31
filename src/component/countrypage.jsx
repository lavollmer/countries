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

  console.log(item);

  return (
    <div>
      <div className='header'>
        <h1 className='title'>Where in the world?</h1>
        <button className='go-back-button' onClick={() => navigate(-1)}><FaArrowLeft />Back</button>
      </div>
      <div className="individual-background-page">
        <div className="individual-country-image-container">
          <img src={item.flags.svg} alt={`${item.name.common} flag`} className="individual-country-image" />
        </div>
        <div>
          <div className="individual-country-card">
            <div className="individual-country-details">
              <h1 className='individual-country-name'>{item.name.common}</h1>
              <div className='grid-container'>
                <div className='individual-grid-item'>
                  <p><strong>Native Name:</strong> {item.name.nativeName ? Object.values(item.name.nativeName)[0].common : 'N/A'}</p>
                  <p><strong>Population:</strong> {item.population.toLocaleString()}</p>
                  <p><strong>Region:</strong> {item.region}</p>
                  <p><strong>Sub Region:</strong> {item.subregion || 'N/A'}</p>
                  <p><strong>Capital:</strong> {item.capital?.[0] || 'N/A'}</p>
                </div>
                <div className='individual-grid-item'>
                  <p><strong>Top Level Domain:</strong> {item.tld?.join(', ') || 'N/A'}</p>
                  <p><strong>Languages:</strong> {Object.values(item.languages || {}).join(', ') || 'N/A'}</p>
                  <p><strong>Currencies:</strong> {Object.values(item.currencies || {}).map(currency => `${currency.name} (${currency.symbol})`).join(', ') || 'N/A'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default countrypage