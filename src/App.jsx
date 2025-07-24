import './App.css'
import CountryPage from './component/countrypage';
import Home from './component/home';
import { Routes, Route } from 'react-router-dom';

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
