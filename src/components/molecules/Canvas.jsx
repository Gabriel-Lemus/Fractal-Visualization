import React, { useEffect } from 'react';
import helpers from '../../helpers/helpers';

function Canvas(props) {
  const windowWidth = window.innerWidth;

  useEffect(() => {
    props.handleRedraw();

    // Redraw fractal on window resize or orientation change
    window.addEventListener('resize', props.handleRedraw);
    window.addEventListener('orientationchange', props.handleRedraw);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      className="fractal-canvas-section"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '3vh 5%',
        width: helpers.STYLES.maxWidth,
        transition: 'all 0.5s ease',
      }}
    >
      <svg
        id="fractal-canvas"
        style={{
          transition: 'all 0.5s ease-in-out',
          width: '100%',
          height:
            windowWidth <= 480
              ? '37vh'
              : windowWidth <= 767
              ? '50vh'
              : windowWidth <= 1024
              ? '55vh'
              : windowWidth <= 1280
              ? '60vh'
              : '65vh',
        }}
      ></svg>
    </section>
  );
}

export default Canvas;
