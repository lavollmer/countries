import '../App.css';
import { FaArrowLeft } from "react-icons/fa6";
import {useLocation, useNavigate} from 'react-router-dom';

const countrypage = ({item}) => {
  const location = useLocation();
  const navigate = useNavigate();

  if (!item) {
    return (
      <div>
        <p>No country data provided</p>
        <button onClick={() => navigate('/')}>Go Back</button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      <h1>{item.name.common}</h1>
      <img src={item.flags.svg} alt={`${item.name.common} flag`} />
      <p><strong>Population:</strong> {item.population.toLocaleString()}</p>
      <p><strong>Region:</strong> {item.region}</p>
      <p><strong>Capital:</strong> {item.capital?.[0] || 'N/A'}</p>
    </div>
  )
}

export default countrypage