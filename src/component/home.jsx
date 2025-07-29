// Home.jsx
import { useState, useEffect } from 'react';
import { CiSearch } from "react-icons/ci";
import axios from 'axios';
import CountryCard from './countrycard';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [selectedFilter, setSelectedFilter] = useState('');
  const [allCountries, setAllCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  const navigate = useNavigate();

  const handleFilterChange = (e) => {
    const region = e.target.value;
    setSelectedFilter(region);
    const filteredCountries = region
      ? allCountries.filter((country) => country.region === region)
      : allCountries;
    setData(filteredCountries);
  };

  const handleSearchChange = (e) => {
    const search = e.target.value;
    setInputValue(search);
    const filteredCountries = search.trim() === ''
      ? allCountries
      : allCountries.filter((country) =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
      );
    setData(filteredCountries);
  };

  const handleCountryClick = (index) => {
    console.log("Clicked")
    setSelectedCardIndex(index);
    setInputValue('');
    navigate('/countrypage', {
      state: {
        country: allCountries[index].name.common,
      }
    });
  };

  async function fetchData() {
    try {
      setLoading(true);
      const response = await axios.get('https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital');
      setData(response.data);
      setAllCountries(response.data);
      setError(false);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
      setSelectedFilter('');
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='background-page'>
      <div className='header'>
        <h1 className='title'>Where in the world?</h1>
      </div>
      <div className='background-body'>
        <div className='search'>
          <div>
            <button className='search-button'>
              <CiSearch style={{ color: 'black', fontSize: '1em', padding: '4px' }} />
              <input className='input' placeholder='Search for a country...' type='text' value={inputValue} onChange={handleSearchChange} />
            </button>
          </div>
          <div>
            <nav>
              <select className='dropdown' value={selectedFilter} onChange={handleFilterChange}>
                <option className='dropdown-item' value="">Filter by Region</option>
                <option className='dropdown-item' value='Africa'>Africa</option>
                <option className='dropdown-item' value='Americas'>Americas</option>
                <option className='dropdown-item' value='Asia'>Asia</option>
                <option className='dropdown-item' value='Europe'>Europe</option>
                <option className='dropdown-item' value='Oceania'>Oceania</option>
              </select>
            </nav>
          </div>
        </div>
      </div>
      <div className='grid-container-wrapper'>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error loading countries</p>
        ) : (
          <div className='grid-container'>
            {data.map((item, index) => (
              <div className='grid-item' key={index}>
                <CountryCard
                  index={index}
                  onClick={() => handleCountryClick(index)}
                  country={item.name.common}
                  imageUrl={item.flags?.svg}
                  population={item.population}
                  region={item.region}
                  capital={item.capital?.[0] || "N/A"} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
