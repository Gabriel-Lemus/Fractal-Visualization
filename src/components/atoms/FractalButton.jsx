import React from 'react';

function FractalButton(props) {
  return (
    <button
      className={`fractal-button ${props.active ? 'active' : 'inactive'}`}
    >
      {props.children}
    </button>
  );
}

export default FractalButton;
