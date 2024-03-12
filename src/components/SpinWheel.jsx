import React, { useState } from 'react';
import './css/wheel.css';

const Wheel = () => {
    const [fields, setFields] = useState([{ id: 1, name: '' }]);
    const [result, setResult] = useState(null);
  
    const handleAddField = () => {
      const newField = { id: fields.length + 1, name: '' };
      setFields(prevFields => [...prevFields, newField]);
    };

    const handleRemoveField = () => {
        if (fields.length > 1) {
          setFields(prevFields => prevFields.slice(0, -1));
        }
    };
  
    const handleFieldNameChange = (id, value) => {
      setFields(prevFields =>
        prevFields.map(field => (field.id === id ? { ...field, name: value } : field))
      );
    };
  
    const handleStartSpin = () => {
      // Logique pour tourner la roue et afficher le résultat
      const randomResult = Math.floor(Math.random() * fields.length);
      setResult(randomResult);
    };
  
    return (
      <div className="roulette-container">
        <h2>Wheel Spinner</h2>
        <div className="fields-container">
          {fields.map(field => (
            <input
              key={field.id}
              type="text"
              placeholder={`Champ ${field.id}`}
              value={field.name}
              onChange={e => handleFieldNameChange(field.id, e.target.value)}
            />
          ))}
        </div>
        <button onClick={handleAddField}>Ajouter un champ</button>
        <button onClick={handleRemoveField}disabled={fields.length < 2}>Supprimer un champ</button>
        <button onClick={handleStartSpin} disabled={fields.length < 2}>Lancer la roue</button>
        {result !== null && (
          <p>Résultat: {fields[result].name}</p>
        )}
      </div>
    );
  };
  
export default Wheel;
