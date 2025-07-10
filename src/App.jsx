import { useState } from 'react'
import './App.css'
import { CiSearch } from "react-icons/ci";

function App() {
  const [country, setCountry] = useState('')

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
                <input placeholder='Search for a country...' type='text' value={country}/>
              </button>
            </div>
            <div>
              <h1>Filter</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
