import React, { useEffect } from 'react';

function Canvas(props) {

  useEffect(() => {
    props.handleRedraw();

    // Redraw fractal on window resize
    window.addEventListener('resize', props.handleRedraw);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="fractal-canvas-section">
      <svg id="fractal-canvas"></svg>
    </section>
  );
}

export default Canvas;
