import React from 'react';
import FractalReset from './FractalReset';
import FractalControlButtons from './FractalControlButtons';

function FractalControls(props) {
  return (
    <section className="fractal-controls">
      <FractalControlButtons handleRedraw={props.handleRedraw}>{props.iteration}</FractalControlButtons>
      <FractalReset />
    </section>
  );
}

export default FractalControls;
