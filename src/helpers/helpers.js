import kochSnowflake from './fractals/kochSnowflake';
import sierpinskiTriangle from './fractals/sierpinskiTriangle';
import mengerSponge from './fractals/mengerSponge';

/**
 * Color palette
 */
const PALETTE = {
  darkBlue: '#22577e',
  blue: '#5584ac',
  lightCyan: '#95d1cc',
  beige: '#f6f2d4',
  white: '#ffffff',
};

/**
 * Function to return an array of the fractals to be displayed
 * @returns {Array.<{ name: String, iterations: Number, getFractal: (iteration: Number) => Array.<SVGPathElement>, active: boolean }>}
 */
const getFractals = () => {
  return [
    {
      name: 'Copo de Nieve de Koch',
      iterations: 0,
      getFractal: (iteration) => kochSnowflake.getKochSnowflake(iteration),
      active: true,
    },
    {
      name: 'Triángulo de Sierpinski',
      iterations: 0,
      getFractal: (iteration) =>
        sierpinskiTriangle.getSierpinskiTriangle(iteration),
      active: false,
    },
    {
      name: 'Esponja de Menger',
      iterations: 0,
      getFractal: (iteration) => mengerSponge.getMengerSponge(iteration),
      active: false,
    },
  ];
};

/**
 * Function to return the copyright text
 * @returns {String}
 */
const getCopyrightText = () => {
  const currentYear = new Date().getFullYear();
  return `© 2021 - ${currentYear} Gabriel Lemus | Todos los derechos reservados`;
};

/**
 * General helpers
 */
const helpers = {
  PALETTE,
  getFractals,
  getCopyrightText,
};

export default helpers;
