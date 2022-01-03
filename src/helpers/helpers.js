import kochSnowflake from './fractals/kochSnowflake';
import sierpinskiTriangle from './fractals/sierpinskiTriangle';
import mengerSponge from './fractals/mengerSponge';

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
      iterations: 0,
      getFractal: kochSnowflake.getKochSnowflake,
      active: true,
    },
    {
      name: 'Triángulo de Sierpinski',
      iterations: 0,
      getFractal: sierpinskiTriangle.getSierpinskiTriangle,
      active: false,
    },
    {
      name: 'Esponja de Menger',
      iterations: 0,
      getFractal: mengerSponge.getMengerSponge,
      active: false,
    },
  ];
};

/*
 * Function to return the copyright text
 */
const getCopyrightText = () => {
  const currentYear = new Date().getFullYear();
  return `© 2021 - ${currentYear} Gabriel Lemus | Todos los derechos reservados`;
};

const helpers = {
  PALETTE,
  getFractals,
  getCopyrightText,
};

export default helpers;
