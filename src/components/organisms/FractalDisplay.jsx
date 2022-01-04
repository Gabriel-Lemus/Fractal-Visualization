import React, { createContext, useEffect, useState } from 'react';
import Canvas from '../molecules/Canvas';
import ButtonsHeader from '../molecules/ButtonsHeader';
import Controls from '../molecules/Controls';
import Footer from '../molecules/Footer';
import helpers from '../../helpers/helpers';
import svgHelpers from '../../helpers/svgHelpers';

export const FractalsContext = createContext();

function FractalDisplay() {
  const [fractals, setFractals] = useState(helpers.getFractals());
  const [activeFractal, setActiveFractal] = useState(fractals[0]);

  // Handle fractal redraw
  const handleRedraw = () => {
    svgHelpers.clearSvg();

    const includeOutlines = false;
    const SVGOutline = svgHelpers.getOutline();
    const drawingArea = svgHelpers.setDrawingArea();
    const fractal = activeFractal.getFractal(activeFractal.iterations);

    const SVGElements = includeOutlines
      ? [SVGOutline, drawingArea, ...fractal]
      : [...fractal];
    svgHelpers.appendSvgElements(SVGElements);
  };

  // Handle fractal redraw when the active fractal changes
  useEffect(() => {
    handleRedraw();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeFractal]);

  return (
    <FractalsContext.Provider
      value={{ fractals, setFractals, activeFractal, setActiveFractal }}
    >
      <ButtonsHeader>
        {fractals.map((fractal) => [fractal.name, fractal.active])}
      </ButtonsHeader>
      <Canvas fractal={activeFractal} handleRedraw={handleRedraw} />
      <Controls
        iteration={activeFractal.iterations}
        handleRedraw={handleRedraw}
      />
      <Footer />
    </FractalsContext.Provider>
  );
}

export default FractalDisplay;
