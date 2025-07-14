import { useState } from 'react'
import './App.css'
import { CiSearch } from "react-icons/ci";
import CountryCard from './component/countrycard';
import axios from 'axios';

function App() {
  // use state of variables
  const [country, setCountry] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('')
  const [originalData, setOriginalData] = useState([])
  const [filteredData, setFilteredData] = useState(originalData)
  const [newFilter, setNewFilter] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [data, setData] = useState([])
  const [inputValue,setInputValue] = useState('')

  const handleFilterChange = (e) => {
    const filteredData = e.target.value;
    setSelectedFilter(newFilter);

    if (newFilter === '') {
      setFilteredData(originalData)
    } else {
      const newFilteredData = originalData.filter(item => item.category === newFilter);
      setFilteredData(newFilteredData);
    }
  }

  async function fetchData() {
    try {
      const response = await axios.get('http://localhost:5173/api/country')
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  fetchData()


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
                <input placeholder='Search for a country...' type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
              </button>
            </div>
            {/* Filter Dropdown Menu */}
            <div>
              <nav className='dropdown'>
                <select value={selectedFilter} onChange={handleFilterChange}>
                  <option value={filteredData}>Filter by Region</option>
                  <option value={filteredData}>Africa</option>
                  <option value={filteredData}>America</option>
                  <option value={filteredData}>Asia</option>
                  <option value={filteredData}>Europe</option>
                  <option value={filteredData}>Oceania</option>
                </select>
              </nav>
            </div>
          </div>
        </div>
        {/* Country Card component */}
        <div>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            <div className='card-list'>
              {data.map((item) => (
                <CountryCard
                  key={item.id}
                  country={item.country}
                  imageUrl={item.imageUrl}
                  population={item.population}
                  region={item.region}
                  capital={item.capital} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default App
