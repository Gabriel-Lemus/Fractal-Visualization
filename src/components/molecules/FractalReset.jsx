import React from 'react';
import ResetButton from '../atoms/ResetButton';

function FractalReset(props) {
  return (
    <section className="fractal-reset">
      <ResetButton handleRedraw={props.handleRedraw}>Restablecer Fractal</ResetButton>
    </section>
  );
}

export default FractalReset;
