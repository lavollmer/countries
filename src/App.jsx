import { useState } from 'react'
import './App.css'
import { CiSearch } from "react-icons/ci";

function App() {
  const [country, setCountry] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('')
  const [originalData, setOriginalData] = useState([])
  const [filteredData, setFilteredData] = useState(originalData)

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
              <div className='dropdown'>
                <select value={selectedFilter} onChange={handleFilterChange}>
                  <option value="">Filter by Region</option>
                  <option value="">Africa</option>
                  <option value="">America</option>
                  <option value="">Asia</option>
                  <option value="">Europe</option>
                  <option value="">Oceania</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
