/*
 * Function to create a SVG polyline
 * @param {Array} points - Array of points
 * @param {String} color - Color of the polyline
 * @param {String} width - Stroke width of the polyline
 */
const getSvgPolyline = (points, color, width) => {
  const polyline = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'polyline'
  );
  polyline.setAttribute('points', points);
  polyline.setAttribute('stroke', color);
  polyline.setAttribute('stroke-width', width);
  polyline.setAttribute('fill', 'none');

  return polyline;
};

/*
 * Function to get the width and height of the svg element
 */
const getSvgDimensions = () => {
  const svg = document.getElementById('fractal-canvas');
  const { width, height } = svg.getBoundingClientRect();
  return { width, height };
};

const svgHelpers = {
  getSvgPolyline,
  getSvgDimensions,
};

export default svgHelpers;
