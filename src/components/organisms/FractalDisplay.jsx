import React, { createContext, useEffect, useState } from 'react';
import Canvas from '../molecules/Canvas';
import ButtonsHeader from '../molecules/ButtonsHeader';
import Controls from '../molecules/Controls';
import Footer from '../molecules/Footer';
import helpers from '../../helpers/helpers';

export const FractalsContext = createContext();

function FractalDisplay() {
  const [fractals, setFractals] = useState(helpers.getFractals());
  const [activeFractal, setActiveFractal] = useState({});

  useEffect(() => {
    setActiveFractal(fractals[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FractalsContext.Provider
      value={{ fractals, setFractals, activeFractal, setActiveFractal }}
    >
      <ButtonsHeader>
        {fractals.map((fractal) => [fractal.name, fractal.active])}
      </ButtonsHeader>
      <Canvas fractal={activeFractal} />
      <Controls iteration={0} />
      <Footer />
    </FractalsContext.Provider>
  );
}

export default FractalDisplay;
