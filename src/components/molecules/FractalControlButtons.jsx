import React from 'react';
import ControlButton from '../atoms/ControlButton';

function FractalControlButtons(props) {
  return (
    <section className="fractal-control-buttons">
      <ControlButton decrease={true}/>
      <p className="fractal-iteration">{props.children}</p>
      <ControlButton decrease={false}/>
    </section>
  );
}

export default FractalControlButtons;
