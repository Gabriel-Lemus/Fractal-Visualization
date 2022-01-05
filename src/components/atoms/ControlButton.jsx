import React, { useContext } from 'react';
import { FractalsContext } from '../organisms/FractalDisplay';

function ControlButton(props) {
  const { fractals, setFractals, activeFractal } = useContext(FractalsContext);

  // Handle the click event to change the fractal iteration
  const handleClick = (decrease) => {
    let newFractals = [];

    for (let i = 0; i < fractals.length; i++) {
      let currentFractal = fractals[i];

      if (currentFractal.active) {
        if (decrease) {
          if (currentFractal.iterations > 0) {
            currentFractal.iterations--;
          }
        } else {
          if (currentFractal.iterations < currentFractal.maxIterations) {
            currentFractal.iterations++;
          }
        }
      }

      newFractals.push(currentFractal);
    }

    props.handleRedraw();
    setFractals(newFractals);
  };

  return (
    <button
      className={
        'control-button ' +
        (props.decrease ? 'decrease' : 'increase') +
        ' ' +
        ((activeFractal.iterations === 0 && props.decrease) ||
        (activeFractal.iterations === activeFractal.maxIterations &&
          !props.decrease)
          ? 'disabled'
          : '')
      }
      onClick={() => handleClick(props.decrease)}
    >
      {props.decrease ? '<<' : '>>'}
    </button>
  );
}

export default ControlButton;
