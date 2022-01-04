import React, { useEffect } from 'react';

function Canvas(props) {

  useEffect(() => {
    props.handleRedraw();

    // Redraw fractal on window resize or orientation change
    window.addEventListener('resize', props.handleRedraw);
    window.addEventListener('orientationchange', props.handleRedraw);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="fractal-canvas-section">
      <svg id="fractal-canvas"></svg>
    </section>
  );
}

export default Canvas;
