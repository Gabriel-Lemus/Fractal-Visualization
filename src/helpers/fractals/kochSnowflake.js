import svgHelpers from '../svgHelpers';

/**
 * Function that returns an array of SVG paths that represent the Koch Snowflake fractal
 * @param {Number} iteration - The iteration of the fractal
 * @returns {Array.<SVGPathElement>} Array of SVG paths that represent the Koch Snowflake fractal
 */
const getKochSnowflake = (iteration) => {
  const { width, height } = svgHelpers.getSvgDimensions();
  const circle = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'circle'
  );
  circle.setAttribute('cx', width / 2);
  circle.setAttribute('cy', height / 2);
  circle.setAttribute('r', height / 3);
  circle.setAttribute('fill', 'none');
  circle.setAttribute('stroke', 'black');
  circle.setAttribute('stroke-width', '2');

  return [circle];
};

/**
 * Object that represents the Koch Snowflake fractal
 */
const kochSnowflake = {
  getKochSnowflake,
};

export default kochSnowflake;
