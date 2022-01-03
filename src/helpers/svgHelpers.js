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

/*
 * Function to draw an outline to the SVG element
 */
const drawOutline = () => {
  const { width, height } = getSvgDimensions();

  const svg = document.getElementById('fractal-canvas');
  const outline = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  );
  outline.setAttribute(
    'd',
    `M 0 0 L 0 ${height} L ${width} ${height} L ${width} 0 L 0 0`
  );
  outline.setAttribute('stroke', 'black');
  outline.setAttribute('stroke-width', '1');
  outline.setAttribute('fill', 'none');
  svg.appendChild(outline);
};

const svgHelpers = {
  getSvgPolyline,
  getSvgDimensions,
  drawOutline,
};

export default svgHelpers;
