import React from 'react';
import ControlButton from '../atoms/ControlButton';

function FractalControlButtons(props) {
  return (
    <section className="fractal-control-buttons">
      <ControlButton>{'<<'}</ControlButton>
      <p className="fractal-iteration">{props.children}</p>
      <ControlButton>{'>>'}</ControlButton>
    </section>
  );
}

export default FractalControlButtons;
