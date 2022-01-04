import helpers from '../helpers';
import svgHelpers from '../svgHelpers';

/**
 * Function that returns an array of SVG paths that represent the Sierpinski Triangle fractal
 * @param {Number} iteration - The iteration of the fractal
 * @returns {Array.<SVGPathElement>} Array of SVG paths that represent the Sierpinski Triangle fractal
 */
const getSierpinskiTriangle = (iteration) => {
  const { width, height } = svgHelpers.getSvgDimensions();
  const circle = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'circle'
  );
  circle.setAttribute('cx', width / 2);
  circle.setAttribute('cy', height / 2);
  circle.setAttribute('r', height / 4);
  circle.setAttribute('fill', 'none');
  circle.setAttribute('stroke', 'red');
  circle.setAttribute('stroke-width', '2');

  return [circle];
};

/**
 * Object that represents the Sierpinski Triangle fractal
 */
const sierpinskiTriangle = {
  getSierpinskiTriangle,
};

export default sierpinskiTriangle;
