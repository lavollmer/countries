import { useState } from 'react'
import './App.css'
import { CiSearch } from "react-icons/ci";

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
        <div className='countries-card'>
          <div className='country-image'>
            <p>IMAGE</p>
          </div>
          <div className='country-name'>
            <h1>Country Name</h1>
          </div>
          <div>
            <div className='country-detail-row'>
              <p className='country-detail'>Population: </p>
              <p>POP DEETS</p>
            </div>
            <div className='country-detail-row'>
              <p className='country-detail'>Region: </p>
              <p>REGION</p>
            </div>
            <div className='country-detail-row'>
              <p className='country-detail'>Capital: </p>
              <p>CAPITAL</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
