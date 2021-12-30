import React from 'react';
import IterationCount from '../atoms/IterationCount';
import FractalControls from './FractalControls';

function Controls() {
  return (
    <section className="controls">
      <IterationCount />
      <FractalControls iteration={0} />
    </section>
  );
}

export default Controls;
