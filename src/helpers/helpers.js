import kochSnowflake from './fractals/kochSnowflake';
import sierpinskiTriangle from './fractals/sierpinskiTriangle';
import mengerSponge from './fractals/mengerSponge';

/**
 * Style constants
 */
const STYLES = {
  maxWidth: '90%',
};

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

// Fractals
const KochSnowflake = {
  name: 'Copo de Nieve de Koch',
  iterations: 0,
  maxIterations: 5,
  getFractal: (iteration) => kochSnowflake.getKochSnowflake(iteration),
};

const SierpinskiTriangle = {
  name: 'Triángulo de Sierpinski',
  iterations: 0,
  maxIterations: 7,
  getFractal: (iteration) =>
    sierpinskiTriangle.getSierpinskiTriangle(iteration),
};

const MengerSponge = {
  name: 'Esponja de Menger',
  iterations: 0,
  maxIterations: 4,
  getFractal: (iteration) => mengerSponge.getMengerSponge(iteration),
};

/**
 * Function to return an array of the fractals to be displayed
 * @returns {Array.<{ name: String, iterations: Number, getFractal: (iteration: Number) => Array.<SVGPathElement>, active: boolean }>} Array of fractals
 */
const getFractals = () => {
  let fractals = [KochSnowflake, SierpinskiTriangle, MengerSponge];
  let activeFractalIdx = 0;

  localStorage.clear();

  for (let i = 0; i < fractals.length; i++) {
    if (i === activeFractalIdx) {
      fractals[i].active = true;
    } else {
      fractals[i].active = false;
    }
  }

  return fractals;
};

/**
 * Function to return the copyright text
 * @returns {String} Copyright text
 */
const getCopyrightText = () => {
  const currentYear = new Date().getFullYear();
  return `© 2021 - ${currentYear} Gabriel Lemus`;
};

/**
 * General helpers
 */
const helpers = {
  STYLES,
  PALETTE,
  getFractals,
  getCopyrightText,
};

export default helpers;
