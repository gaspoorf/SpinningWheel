import React, { useState } from 'react';
import WheelComponent from './WheelConstructor';

export default function RoulettePage({ segments, onBack }) {
  const [winner, setWinner] = useState(null); // définir l'état winner et la fonction setWinner

  // alterner entre rose et violet
  const alternateColors = (index) => {
    return index % 2 === 0 ? "#C622C0" : "#dc87d9";
  };

  // génerer les couleurs des sections
  const segColors = segments.map((segment, index) => alternateColors(index));

  const onFinished = (winner) => {
    setWinner(winner); // met à jour l'état winner
  };

  return (
    <div>
      <h1 className='title marg-top2 marg-top-mobile'>SPIN !</h1>
      <div className='wheel marg-top2'>
        
        <WheelComponent
          segments={segments}
          segColors={segColors}
          onFinished={onFinished}
          primaryColor="black"
          contrastColor="white"
          buttonText="Spin"
          isOnlyOnce={false}
          size={130}
          upDuration={500}
          downDuration={600}
          fontFamily="'Luckiest Guy', cursive"
          fontSize={400}
        />
        
      </div>
      <div className='flex-center button-win'>
        {winner && <button>{winner}</button>}
      </div>
      <div className='flex-center marg-top-mobile'>
        <button className='button-pink button-stay' onClick={() => onBack('input')}>Custom Wheel</button>
      </div>
    </div>
  );
}
