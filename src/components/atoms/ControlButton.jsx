import React, { useContext, useEffect } from 'react';
import { FractalsContext } from '../organisms/FractalDisplay';

function ControlButton(props) {
  const { fractals, setFractals, activeFractal } = useContext(FractalsContext);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          currentFractal.iterations++;
        }
      }

      newFractals.push(currentFractal);
    }

    setFractals(newFractals);
  };

  return (
    <button
      className={
        'control-button ' +
        (props.decrease ? 'decrease' : 'increase') +
        ' ' +
        (activeFractal.iterations === 0 && props.decrease ? 'disabled' : '')
      }
      onClick={() => handleClick(props.decrease)}
    >
      {props.decrease ? '<<' : '>>'}
    </button>
  );
}

export default ControlButton;
