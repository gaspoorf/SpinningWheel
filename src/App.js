import React, { useState, useEffect } from 'react';
import InputPage from './components/ConfigurePage';
import RoulettePage from './components/RoulettePage';
import HomePage from './components/HomePage';



export default function App() {
  const [currentPage, setCurrentPage] = useState('menu');
  const [segments, setSegments] = useState([]);



  const handleInputSubmit = (fields) => {
    setSegments(fields);
    setCurrentPage('roulette');
  };

  const handleSelectPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      {currentPage === 'menu' && (
        <HomePage onSelectPage={handleSelectPage} />
      )}
      {currentPage === 'input' && (
        <InputPage onSubmit={handleInputSubmit} segments={segments} />
      )}
      {currentPage === 'roulette' && (
        <RoulettePage segments={segments} onBack={() => setCurrentPage('input')} />
      )}
    </div>
  );
}
