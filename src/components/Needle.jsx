// Needle.js

import React from 'react';
import './css/needle.css';

const Needle = ({ needlePosition, onClick }) => {
  return (
    <div className="needle" style={{ transform: `rotate(${needlePosition * 360}deg)` }} onClick={onClick}>
      {/* Styling for the needle can be added in Needle.css */}
    </div>
  );
};

export default Needle;
