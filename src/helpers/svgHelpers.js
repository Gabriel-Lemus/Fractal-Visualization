import helpers from './helpers';
import mathHelpers from './mathHelpers';

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
  svg.parentNode.replaceChild(svg.cloneNode(false), svg);
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
 * Function that receives a path element and the number of divisions of the path and returns an array of points
 * @param {SVGPathElement} path - SVG path element
 * @param {Number} divisions - Number of divisions of the path
 * @returns {Array.<DOMPoint>} Array of points
 */
const getPointsFromPath = (path, divisions) => {
  const pathLength = Math.floor(path.getTotalLength());
  const percentage = pathLength / 100;
  const increment = 100 / divisions;
  const points = [];

  for (let i = 0; i < 100; i += increment) {
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
  const x3 = x + sidelength * Math.cos(mathHelpers.degreesToRadians(60));
  const y3 = y - sidelength * Math.sin(mathHelpers.degreesToRadians(60));

  return [
    { x: x, y: y },
    { x: x2, y: y },
    { x: x3, y: y3 },
  ];
};

/**
 * Function that receives an array of points and return a SVG path element
 * @param {Array.<{ x: Number, y: Number }>} points - Array of points
 * @returns {SVGPathElement} SVG path element
 */
const getTrianglePath = (points) => {
  const SVGTriangle = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  );
  SVGTriangle.setAttribute('stroke-width', '1');
  SVGTriangle.setAttribute('fill', helpers.PALETTE.darkBlue);
  SVGTriangle.setAttribute('stroke', helpers.PALETTE.lightCyan);
  SVGTriangle.setAttribute(
    'd',
    `M ${points[0].x} ${points[0].y} L ${points[1].x} ${points[1].y} L ${points[2].x} ${points[2].y} L ${points[0].x} ${points[0].y}`
  );

  return SVGTriangle;
};

/**
 * Function that receives an array of array of two points and a width and return an array of SVG polylines
 * @param {Array.<Array.<{ x: Number, y: Number }>>} points - Array of array of two points
 * @param {Number} width - Width of the polylines
 * @returns {Array.<SVGPolylineElement>} Array of SVG polyline elements
 */
const getPolylinesFromPoints = (points, width) => {
  const polylines = [];

  points.forEach((point) => {
    const polyline = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'polyline'
    );
    polyline.setAttribute('stroke-width', width);
    polyline.setAttribute('stroke', helpers.PALETTE.darkBlue);
    polyline.setAttribute(
      'points',
      `${point[0].x} ${point[0].y} ${point[1].x} ${point[1].y}`
    );

    polylines.push(polyline);
  });

  return polylines;
};

/**
 * Function that receives an array of SVG polyline elements, concatenates their
 * points and returns an array with a single SVG polyline element
 * @param {Array.<SVGPolylineElement>} polylines - Array of SVG polyline elements
 * @returns {SVGPolylineElement} SVG polyline element
 */
const getPolylineFromPolylines = (polylines, width) => {
  let pointsList = '';

  polylines.forEach((polyline) => {
    pointsList += polyline.points[0].x + ',' + polyline.points[0].y + ' ';
  });
  pointsList += polylines[0].points[0].x + ',' + polylines[0].points[0].y;

  const polyline = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'polyline'
  );
  polyline.setAttribute('stroke-width', width);
  polyline.setAttribute('stroke', helpers.PALETTE.darkBlue);
  polyline.setAttribute('points', pointsList);
  polyline.setAttribute('fill', 'none');

  return polyline;
};

/**
 * Function that receives an SVG polyline element and deconcatenates its points
 * into an array of polylines
 * @param {SVGPolylineElement} polyline - SVG polyline element
 * @returns {Array.<SVGPolylineElement>} Array of SVG polyline elements
 */
const getPolylinesFromPolyline = (polyline) => {
  const polylines = [];
  const points = polyline.points.split(' ');

  for (let i = 0; i < points.length - 1; i += 2) {
    const polyline = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'polyline'
    );
    polyline.setAttribute('stroke-width', '1');
    polyline.setAttribute('stroke', helpers.PALETTE.darkBlue);
    polyline.setAttribute('points', `${points[i]} ${points[i + 1]}`);

    polylines.push(polyline);

    if (i === points.length - 2) {
      const polyline = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'polyline'
      );
      polyline.setAttribute('stroke-width', '1');
      polyline.setAttribute('stroke', helpers.PALETTE.darkBlue);
      polyline.setAttribute(
        'points',
        `${points[i]} ${points[i + 1]} ${points[0]} ${points[1]}`
      );

      polylines.push(polyline);
    }
  }

  return polylines;
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
  getTrianglePath,
  getPolylinesFromPoints,
  getPolylineFromPolylines,
  getPolylinesFromPolyline,
};

export default svgHelpers;
