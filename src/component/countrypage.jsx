import React from 'react'
import '../App.css';
import { FaArrowLeft } from "react-icons/fa6";

const countrypage = () => {
  return (
    <div className='background-page'>
      <div className='header'>
        <h1 className='title'>Where in the world?</h1>
      </div>
      <div className='button-container'>
        <button className='button'><FaArrowLeft /> Back</button>
      </div>
    </div>
  )
}

export default countrypage