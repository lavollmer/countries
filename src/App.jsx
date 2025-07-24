import { useState, useEffect } from 'react'
import './App.css'
import CountryPage from './component/countrypage';
import { Routes, Route, useNavigate } from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countrypage" element={<CountryPage />} />
      </Routes>
    </>
  );
}

export default App
