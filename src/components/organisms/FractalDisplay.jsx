import React from 'react';
import Canvas from '../atoms/Canvas';
import ButtonsHeader from '../molecules/ButtonsHeader';
import Controls from '../molecules/Controls';
import Footer from '../molecules/Footer';

function FractalDisplay() {
  return (
    <>
      <ButtonsHeader />
      <Canvas />
      <Controls iteration={0} />
      <Footer />
    </>
  );
}

export default FractalDisplay;
