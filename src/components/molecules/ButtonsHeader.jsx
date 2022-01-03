import React from 'react';
import FractalButton from '../atoms/FractalButton';

function ButtonsHeader(props) {
  return (
    <section className="buttons-header">
      {props.children.map((fractal) => (
        <FractalButton
          key={props.children.indexOf(fractal)}
          index={props.children.indexOf(fractal)}
          active={fractal[1]}
        >
          {fractal[0]}
        </FractalButton>
      ))}
    </section>
  );
}

export default ButtonsHeader;
