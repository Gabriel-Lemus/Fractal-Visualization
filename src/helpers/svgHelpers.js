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
 * Function to get the outline of the SVG element
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

/*
 * Function to get the beginning and end of the drawing area
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

/*
 * Function to set the main drawing area of the SVG element
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
    // Draw a svg square with length of the height of the svg element
    SVGDrawingArea.setAttribute(
      'd',
      `M ${beginning} 0 L ${beginning} ${height} L ${end} ${height} L ${end} 0 L ${beginning} 0`
    );
  } else {
    const beginning = height / 2 - width / 2;
    const end = height / 2 + width / 2;

    SVGDrawingArea.setAttribute('stroke', 'red');
    // Draw a svg square with length of the height of the svg element
    SVGDrawingArea.setAttribute(
      'd',
      `M 0 ${beginning} L ${width} ${beginning} L ${width} ${end} L 0 ${end} L ${beginning} 0`
    );
  }

  return SVGDrawingArea;
};

/*
 * Function to clear SVG element
 */
const clearSvg = () => {
  const svg = document.getElementById('fractal-canvas');
  svg.innerHTML = '';
};

/*
 * Function that receives an array of SVG elements and appends them to the SVG element
 * @param {Array} elements - Array of SVG elements
 */
const appendSvgElements = (elements) => {
  const svg = document.getElementById('fractal-canvas');
  elements.forEach((element) => {
    svg.appendChild(element);
  });
};

/*
 * Function that receives a path elemnent and returns an array of points
 * @param {String} path - Path of the polyline
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

const svgHelpers = {
  getSvgPolyline,
  getSvgDimensions,
  getOutline,
  setDrawingArea,
  clearSvg,
  getDrawingArea,
  appendSvgElements,
  getPointsFromPath,
};

export default svgHelpers;
