import React, { useContext } from 'react';
import { FractalsContext } from '../organisms/FractalDisplay';

function IterationCount() {
  const { activeFractal } = useContext(FractalsContext);
  
  return (
    <section className="iteration-count">
      <p className="iteration">Iteración: {activeFractal.iterations}</p>
    </section>
  );
}

export default IterationCount;
