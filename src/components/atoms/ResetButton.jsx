import React, { useContext } from 'react';
import { FractalsContext } from '../organisms/FractalDisplay';

function ResetButton(props) {
  const { fractals, setFractals } = useContext(FractalsContext);
  
  // Handle click to reset the fractal (i.e. set the iteration to 0)
  const resetFractal = () => {
    let newFractals = [];

    for (let i = 0; i < fractals.length; i++) {
      let currentFractal = fractals[i];

      if (currentFractal.active) {
        currentFractal.iterations = 0;
      }

      newFractals.push(currentFractal);
    }

    setFractals(newFractals);
  };
  
  return <button className="reset-button" onClick={resetFractal}>{props.children}</button>;
}

export default ResetButton;
