import React, { useContext } from 'react';
import { FractalsContext } from '../organisms/FractalDisplay';

function FractalButton(props) {
  const { fractals, setFractals } = useContext(FractalsContext);

  // Change the active fractal
  const handleToggleFractalDisplay = () => {
    if (!props.active) {
      let newFractals = [];

      for (let i = 0; i < fractals.length; i++) {
        newFractals.push({ ...fractals[i], active: i === props.index });
      }

      localStorage.setItem('activeFractalIdx', props.index);
      setFractals(newFractals);
    }
  };

  return (
    <button
      className={`fractal-button ${props.active ? 'active' : 'inactive'}`}
      onClick={handleToggleFractalDisplay}
    >
      {props.children}
    </button>
  );
}

export default FractalButton;
