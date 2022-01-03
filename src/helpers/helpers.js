// Color palette
const PALETTE = {
  darkBlue: '#22577e',
  blue: '#5584ac',
  lightCyan: '#95d1cc',
  beige: '#f6f2d4',
  white: '#ffffff',
};

/*
 * Function to return an array of the fractals to be displayed
 */
const getFractals = () => {
  return [
    {
      name: 'Copo de Nieve de Koch',
      svg: 0,
      active: true,
    },
    {
      name: 'Triángulo de Sierpinski',
      svg: 0,
      active: false,
    },
    {
      name: 'Esponja de Menger',
      svg: 0,
      active: false,
    },
  ];
};

const helpers = {
  PALETTE,
  getFractals,
};

export default helpers;
