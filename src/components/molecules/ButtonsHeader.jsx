import React from 'react';
import FractalButton from '../atoms/FractalButton';

function ButtonsHeader() {
  return (
    <section className="buttons-header">
      <FractalButton>Copo de Nieve de Koch</FractalButton>
      <FractalButton>Triángulo de Sierpinski</FractalButton>
      <FractalButton>Esponja de Menger</FractalButton>
    </section>
  );
}

export default ButtonsHeader;
