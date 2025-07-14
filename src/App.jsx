import { useState } from 'react'
import './App.css'
import { CiSearch } from "react-icons/ci";
import CountryCard from './component/countrycard';

function App() {
  // use state of variables
  const [country, setCountry] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('')
  const [originalData, setOriginalData] = useState([])
  const [filteredData, setFilteredData] = useState(originalData)
  const [newFilter, setNewFilter] = useState('')

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
                <input placeholder='Search for a country...' type='text' value={country} />
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
        <div>
          <CountryCard key={item.id} title={item.title} imageUrl={item.imageUrl} population={item.population} region={item.region} capital={item.capital}/>
        </div>
      </div >
    </>
  )
}

export default App
