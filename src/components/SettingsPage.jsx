import React, { useState, useEffect } from 'react';


export default function SettingsPage({ onBack, onToggleMusic, onToggleSound }) {
  const [musicEnabled, setMusicEnabled] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);

  // si localStorage existe, charger les préférences
  useEffect(() => {
    const storedMusicPreference = localStorage.getItem('musicEnabled');
    if (storedMusicPreference !== null) {
      setMusicEnabled(JSON.parse(storedMusicPreference));
    }

    const storedSoundPreference = localStorage.getItem('soundEnabled');
    if (storedSoundPreference !== null) {
      setSoundEnabled(JSON.parse(storedSoundPreference));
    }
  }, []);

  // Met à jour localStorage quand ya des changements dans les préférences
  useEffect(() => {
    localStorage.setItem('musicEnabled', JSON.stringify(musicEnabled));
  }, [musicEnabled]);

  useEffect(() => {
    localStorage.setItem('soundEnabled', JSON.stringify(soundEnabled));
  }, [soundEnabled]);

  return (
    <div>
      <div className='marg-top2'>
        <h1 className='second-title'>Settings</h1>
      </div>
      
      <div className='flex-column marg-top text'>
        <label>
          <input type="checkbox" checked={musicEnabled}
            onChange={() => {
              setMusicEnabled(!musicEnabled);
              onToggleMusic(!musicEnabled);
            }}
          />
          Music
        </label>

        <label>
          <input type="checkbox" checked={soundEnabled} 
            onChange={() => {
              setSoundEnabled(!soundEnabled);
              onToggleSound(!soundEnabled);
            }}
          />
          Sound
        </label>
      </div>
      
      <div className='flex-column marg-top'>
        <button onClick={onBack}>Retour</button>
      </div>
    </div>
  );
}
