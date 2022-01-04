import helpers from './helpers';

/**
 * Function to create a SVG polyline
 * @param {Array.<{ x: Number, y: Number }>} points - Array of points
 * @param {String} color - Color of the polyline
 * @param {Number} width - Stroke width of the polyline
 * @returns {SVGPolylineElement} SVG polyline element
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

Math.cos();

/**
 * Function to get the width and height of the svg element
 * @returns {{ width: Number, height: Number }} Width and height of the svg element
 */
const getSvgDimensions = () => {
  const svg = document.getElementById('fractal-canvas');
  const { width, height } = svg.getBoundingClientRect();
  return { width, height };
};

/**
 * Function to get the outline of the SVG element
 * @returns {SVGPathElement} SVG path element
 */
const getOutline = () => {
  const { width, height } = getSvgDimensions();

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

  return outline;
};

/**
 * Function to get the beginning and end of the drawing area
 * @returns {{ beginning: Number, end: Number }} Beginning and end of the drawing area
 */
const getDrawingArea = () => {
  const { width, height } = getSvgDimensions();
  let beginning = 0;
  let end = 0;

  if (height < width) {
    beginning = width / 2 - height / 2;
    end = width / 2 + height / 2;
  } else {
    beginning = height / 2 - width / 2;
    end = height / 2 + width / 2;
  }

  return { beginning, end };
};

/**
 * Function to set the main drawing area of the SVG element
 * @returns {SVGPathElement} SVG path element
 */
const setDrawingArea = () => {
  const { width, height } = getSvgDimensions();
  const SVGDrawingArea = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  );
  SVGDrawingArea.setAttribute('stroke-width', '1');
  SVGDrawingArea.setAttribute('fill', 'none');

  if (height < width) {
    const beginning = width / 2 - height / 2;
    const end = width / 2 + height / 2;

    SVGDrawingArea.setAttribute('stroke', 'blue');
    SVGDrawingArea.setAttribute(
      'd',
      `M ${beginning} 0 L ${beginning} ${height} L ${end} ${height} L ${end} 0 L ${beginning} 0`
    );
  } else {
    const beginning = height / 2 - width / 2;
    const end = height / 2 + width / 2;

    SVGDrawingArea.setAttribute('stroke', 'red');
    SVGDrawingArea.setAttribute(
      'd',
      `M 0 ${beginning} L ${width} ${beginning} L ${width} ${end} L 0 ${end} L ${beginning} 0`
    );
  }

  return SVGDrawingArea;
};

/**
 * Function to clear SVG element
 */
const clearSvg = () => {
  const svg = document.getElementById('fractal-canvas');
  svg.innerHTML = '';
};

/**
 * Function that receives an array of SVG elements and appends them to the SVG element
 * @param {Array} elements - Array of SVG elements
 */
const appendSvgElements = (elements) => {
  const svg = document.getElementById('fractal-canvas');
  elements.forEach((element) => {
    svg.appendChild(element);
  });
};

/**
 * Function that receives a path element and returns an array of points
 * @param {SVGPathElement} path - SVG path element
 * @returns {Array.<DOMPoint>} Array of points
 */
const getPointsFromPath = (path) => {
  const pathLength = Math.floor(path.getTotalLength());
  const percentage = pathLength / 100;
  const points = [];

  for (let i = 0; i < 100; i += 25) {
    points.push(path.getPointAtLength(percentage * i));
  }

  return points;
};

/**
 * Function that receives an array of 4 points and returns a square svg path
 * @param {Array.<Number>} points - Array of 4 points
 * @returns {SVGPathElement} SVG path element
 */
const getSquarePath = (points) => {
  const SVGSquare = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  );
  SVGSquare.setAttribute('stroke-width', '1');
  SVGSquare.setAttribute('fill', helpers.PALETTE.darkBlue);
  SVGSquare.setAttribute('stroke', helpers.PALETTE.lightCyan);
  SVGSquare.setAttribute(
    'd',
    `M ${points[0].x} ${points[0].y} L ${points[1].x} ${points[1].y} L ${points[2].x} ${points[2].y} L ${points[3].x} ${points[3].y} L ${points[0].x} ${points[0].y}`
  );

  return SVGSquare;
};

/**
 * Function that receives the lower left point of an equilateral triangle and the sidelength and determines the other two points
 * @param {{ x: Number, y: Number }} point - Lower left point of the equilateral triangle
 * @param {Number} sidelength - Sidelength of the equilateral triangle
 * @returns {Array.<{ x: Number, y: Number }>} Array of the points of the equilateral triangle
 */
const getEquilateralTrianglePoints = (point, sidelength) => {
  const { x, y } = point;
  const x2 = x + sidelength;
  const y2 = y + sidelength;
  const x3 = x + sidelength / 2;
  const y3 = y + (sidelength * Math.sqrt(3)) / 2;

  return [
    { x, y },
    { x: x2, y: y2 },
    { x: x3, y: y3 },
  ];
};

/**
 * Object that contains all the functions that help with SVG manipulation
 */
const svgHelpers = {
  getSvgPolyline,
  getSvgDimensions,
  getOutline,
  setDrawingArea,
  clearSvg,
  getDrawingArea,
  appendSvgElements,
  getPointsFromPath,
  getSquarePath,
  getEquilateralTrianglePoints,
};

export default svgHelpers;
