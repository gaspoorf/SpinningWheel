import React from 'react';
import "./css/reset.css";
import "./css/home.css";
import "./css/button.css";


export default function HomePage({ onSelectPage }) {
  return (
  
    <div>
        <div>
            <h1 className='title marg-top3'>
                <span>
                    SUPER
                </span>
                <span>
                    SPIN
                </span>
                <span>
                    WHEEL
                </span>
            </h1>
        </div>
        <div className='flex-column marg-top'>
            <button onClick={() => onSelectPage('input')}>PLAY</button>
        </div>
    </div>
  );
}
