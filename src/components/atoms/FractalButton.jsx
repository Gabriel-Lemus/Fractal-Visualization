import React, { useContext } from 'react';
import { FractalsContext } from '../organisms/FractalDisplay';

function FractalButton(props) {
  const context = useContext(FractalsContext);
  const fractals = context.fractals;
  const setFractals = context.setFractals;
  const setActiveFractal = context.setActiveFractal;

  // Change the active fractal
  const handleToggleFractalDisplay = () => {
    if (!props.active) {
      let newFractals = [];

      for (let i = 0; i < fractals.length; i++) {
        newFractals.push({ ...fractals[i], active: i === props.index });
      }

      setFractals(newFractals);
      setActiveFractal(newFractals[props.index]);
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
