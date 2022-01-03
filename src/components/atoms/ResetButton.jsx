import React, { useContext } from 'react';
import { FractalsContext } from '../organisms/FractalDisplay';

function ResetButton(props) {
  const { fractals, setFractals, activeFractal } = useContext(FractalsContext);

  // Handle click to reset the fractal (i.e. set the iteration to 0)
  const resetFractal = () => {
    if (activeFractal.iterations !== 0) {
      let newFractals = [];

      for (let i = 0; i < fractals.length; i++) {
        let currentFractal = fractals[i];

        if (currentFractal.active) {
          currentFractal.iterations = 0;
        }

        newFractals.push(currentFractal);
      }

      setFractals(newFractals);
      props.handleRedraw();
    }
  };

  return (
    <button
      className={
        'reset-button' + (activeFractal.iterations === 0 ? ' disabled' : '')
      }
      onClick={resetFractal}
    >
      {props.children}
    </button>
  );
}

export default ResetButton;
