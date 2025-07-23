import { useState, useEffect } from 'react'
import './App.css'
import { CiSearch } from "react-icons/ci";
import CountryCard from './component/countrycard';
import axios, { all } from 'axios';

function App() {
  // use state of variables
  const [selectedFilter, setSelectedFilter] = useState('')
  const [allCountires, setAllCountires] = useState([])
  const [originalData, setOriginalData] = useState([])
  const [newFilter, setNewFilter] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [data, setData] = useState([])
  const [inputValue, setInputValue] = useState('')

  const handleFilterChange = (e) => {
    const filteredData = e.target.value;
    // setting the Filtered data to the state
    setSelectedFilter(filteredData);

    const filteredCountries = filteredData
      ? allCountires.filter((country) => country.region === filteredData)
      : allCountires;
  }

  async function fetchData() {
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all?fields=name,flag,population,region,capital');
      console.log(response.data);
      setData(response.data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  // Wrap in useEffect to fetch data on component mount not infinitely
  useEffect(() => {
    fetchData()
  }, []);


  return (
    <>
      <div className='background-page'>
        <div className='header'>
          <h1 className='title'>Where in the world?</h1>
        </div>
        <div className='background-body'>
          <div className='search'>
            <div>
              <button className='search-button'>
                <CiSearch />
                <input className='input' placeholder='Search for a country...' type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
              </button>
            </div>
            {/* Filter Dropdown Menu */}
            <div>
              <nav>
                <select className='dropdown' value={selectedFilter} onChange={handleFilterChange}>
                  <option className='dropdown-item' value="">Filter by Region</option>
                  <option className='dropdown-item' value='Africa'>Africa</option>
                  <option className='dropdown-item' value='America'>America</option>
                  <option className='dropdown-item' value='Asia'>Asia</option>
                  <option className='dropdown-item' value='Europe'>Europe</option>
                  <option className='dropdown-item' value='Oceania'>Oceania</option>
                </select>
              </nav>
            </div>
          </div>
        </div>
        {/* Country Card component */}
        <div className='grid-container-wrapper'>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            <div className='grid-container'>
              {data.map((item, index) => (
                <div className='grid-item' key={index}>
                  <CountryCard
                    country={item.name.common}
                    // countryUrl={item.flag.svg}
                    imageUrl={item.flag}
                    population={item.population}
                    region={item.region}
                    capital={item.capital?.[0] || "N/A"} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default App
