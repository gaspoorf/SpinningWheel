import React, { useState, useEffect } from 'react';
import InputPage from './components/ConfigurePage';
import RoulettePage from './components/RoulettePage';
import HomePage from './components/HomePage';
import clickSound from './components/audio/click.mp3';
import backgroundMusic from './components/audio/backSound.mp3';



export default function App() {
  const [currentPage, setCurrentPage] = useState('menu');
  const [segments, setSegments] = useState([]);

  const playClickSound = () => {
    const audio = new Audio(clickSound);
    audio.play();
  };

  const playBackgroundMusic = () => {
    const audio = new Audio(backgroundMusic);
    audio.loop = true;
    audio.play();
  };

  useEffect(() => {

    playBackgroundMusic();

    // arrêter la musique lors du démontage du composant
    return () => {
      const audio = new Audio(backgroundMusic);
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  const handleInputSubmit = (fields) => {
    setSegments(fields);
    setCurrentPage('roulette');
    playClickSound();
  };

  const handleSelectPage = (page) => {
    setCurrentPage(page);
    playClickSound();
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
