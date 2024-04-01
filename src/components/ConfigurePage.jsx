import React, { useState, useEffect } from 'react';
import "./css/reset.css";
import "./css/home.css";
import "./css/button.css";


export default function InputPage({ onSubmit, segments: initialSegments }) {
  const [fields, setFields] = useState([]);

  useEffect(() => {
    // Initialiser les champs avec les segments passés en tant que props
    setFields(initialSegments);
    if (initialSegments.length === 0) {
      setFields(['', '']); // ajoute deux champs d'entrée de base si ya pas de segments initiaux
    }
  }, [initialSegments]);

  const handleChange = (index, value) => {
    const newFields = [...fields];
    newFields[index] = value;
    setFields(newFields);
  };

  const handleAddField = () => {
    setFields([...fields, '']);
  };

  const handleRemoveField = (index) => {
    if (fields.length <= 2) return; // empêche la suppression si le nombre de champs est inférieur ou égal à 2
    const newFields = [...fields];
    newFields.splice(index, 1);
    setFields(newFields);
  };

  const handleSubmit = () => {
    onSubmit(fields.filter(field => field.trim() !== ''));
  };

  const allFieldsFilled = fields.every(field => field.trim() !== '');
  const buttonStyle = {
    backgroundColor: allFieldsFilled ? '#C622C0' : 'gray' // couleur gris si les champs sont pas remplis
  };

  return (
    <div>
      
      <div className='marg-top2'>
        <h1 className='second-title'>
          <span>
            CREATE YOUR
          </span>
          <span>
             WHEEL
          </span>
        </h1>
      </div>

      <div className='flex-center marg-top2 marg-bottom'>
        {fields.map((field, index) => (
          <div key={index} className='input-button'>
            <input className='input-player'
              type="text"
              placeholder={`Field ${index + 1}`}
              value={field || ''}
              onChange={e => handleChange(index, e.target.value)}
            />
            
            {fields.length > 0 && <button className='button-circle' onClick={() => handleRemoveField(index)}><div className='more'>-</div></button>}
          </div>
        ))}
        <button className='button-circle' onClick={handleAddField}><div className='more'>+</div></button>
        <button onClick={handleSubmit} disabled={!allFieldsFilled} style={buttonStyle}>PLAY</button>
      </div>

    </div>
  );
}
