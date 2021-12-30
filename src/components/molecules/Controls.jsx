import React from 'react';
import IterationCount from '../atoms/IterationCount';
import FractalControls from './FractalControls';

function Controls(props) {
  return (
    <section className="controls">
      <IterationCount />
      <FractalControls iteration={props.iteration} />
    </section>
  );
}

export default Controls;
