import mathHelpers from '../mathHelpers';
import svgHelpers from '../svgHelpers';

const SNOWFLAKEWIDTH = 2;

/**
 * Function that takes in an SVG polyline element that represents a segment of the Koch Snowflake fractal and return 5 new points that represent the segment of the next iteration
 * @param {SVGPolylineElement} polyline - SVG polyline element that represents a segment of the Koch Snowflake fractal
 * @param {Number} counter - The counter of the segment (0 - 2)
 * @returns {Array.<{ x: Number, y: Number }>} Array of points that represent the segment of the next iteration
 */
const getNextSegment = (polyline, counter) => {
  const points = polyline.points;
  const point1 = points[0];
  const point5 = points[1];
  const prevSideLength = mathHelpers.getDistanceBetweenTwoPoints(
    point1,
    point5
  );
  const newSideLength = prevSideLength / 3;
  const midPointOffset = Math.sqrt(
    newSideLength * newSideLength - (newSideLength / 2) * (newSideLength / 2)
  );
  let angle = mathHelpers.getAngleBetweenTwoPoints(point1, point5);

  const point2 = mathHelpers.getPointBetweenTwoPoints(point1, point5, 1 / 3);
  const point3 = mathHelpers.getPointBetweenTwoPoints(point1, point5, 1 / 2);
  const point4 = mathHelpers.getPointBetweenTwoPoints(point1, point5, 2 / 3);

  if (counter === 0) {
    if (angle === 0) {
      point3.y += midPointOffset;
    } else {
      point3.y -= midPointOffset;
    }
  } else if (counter === 1) {
    if (angle <= 0) {
      point3.x += midPointOffset * Math.cos(mathHelpers.degreesToRadians(30));
      point3.y -= midPointOffset * Math.sin(mathHelpers.degreesToRadians(30));
    } else {
      point3.x -= midPointOffset * Math.cos(mathHelpers.degreesToRadians(30));
      point3.y += midPointOffset * Math.sin(mathHelpers.degreesToRadians(30));
    }
  } else {
    if (angle < 0) {
      point3.x += midPointOffset * Math.cos(mathHelpers.degreesToRadians(30));
      point3.y += midPointOffset * Math.sin(mathHelpers.degreesToRadians(30));
    } else {
      point3.x -= midPointOffset * Math.cos(mathHelpers.degreesToRadians(30));
      point3.y -= midPointOffset * Math.sin(mathHelpers.degreesToRadians(30));
    }
  }

  const newPoints = [point1, point2, point3, point4, point5];

  return newPoints;
};

/**
 * Function that receives an array of SVG polylines elements and divides them into the next iteration of the Koch Snowflake fractal
 * @param {Array.<SVGPolylineElement>} previousIteration - Array of SVG polylines elements that represent the previous iteration of the fractal
 * @returns {Array.<SVGPolylineElement>} Array of SVG polylines elements that represent the next iteration of the fractal
 */
const getNextIteration = (previousIteration) => {
  let pointsList = [];
  let points = previousIteration[0].points;

  for (let i = 0; i < points.length - 1; i++) {
    const polyline = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'polyline'
    );
    polyline.setAttribute('stroke-width', SNOWFLAKEWIDTH);
    polyline.setAttribute('stroke', 'black');
    polyline.setAttribute('fill', 'none');
    polyline.setAttribute(
      'points',
      `${points[i].x},${points[i].y} ${points[i + 1].x},${points[i + 1].y}`
    );

    pointsList.push(polyline);
  }

  previousIteration = pointsList;

  let nextIteration = [];
  let counter = 0;

  previousIteration.forEach((polyline) => {
    const newPoints = getNextSegment(polyline, counter);
    const lineSegments = [
      [newPoints[0], newPoints[1]],
      [newPoints[1], newPoints[2]],
      [newPoints[2], newPoints[3]],
      [newPoints[3], newPoints[4]],
    ];

    const newSegment = svgHelpers.getPolylinesFromPoints(
      lineSegments,
      SNOWFLAKEWIDTH
    );
    nextIteration = nextIteration.concat(newSegment);

    counter = (counter + 1) % 3;
  });

  nextIteration = svgHelpers.getPolylineFromPolylines(nextIteration, points.length < 769 ? SNOWFLAKEWIDTH : 1);

  return [nextIteration];
};

/**
 * Function that returns an array of SVG polylines that represent the Koch Snowflake fractal
 * @param {Number} iteration - The iteration of the fractal
 * @returns {Array.<SVGPolylineElement>} Array of SVG polylines that represent the Koch Snowflake fractal
 */
const getKochSnowflake = (iteration) => {
  if (iteration === 0) {
    const { width, height } = svgHelpers.getSvgDimensions();
    const { beginning, end } = svgHelpers.getDrawingArea();
    let sideLength = (end - beginning) / 1.3;

    const lowerLeftTrianglePoint = {
      x: width / 2 - sideLength / 2,
      y: height / 2 + sideLength / 3.5,
    };

    const trianglePoints = svgHelpers.getEquilateralTrianglePoints(
      lowerLeftTrianglePoint,
      sideLength
    );

    const lineSegments = [
      [trianglePoints[0], trianglePoints[1]],
      [trianglePoints[1], trianglePoints[2]],
      [trianglePoints[2], trianglePoints[0]],
    ];

    let snowflake = svgHelpers.getPolylinesFromPoints(
      lineSegments,
      SNOWFLAKEWIDTH
    );

    snowflake = svgHelpers.getPolylineFromPolylines(snowflake, SNOWFLAKEWIDTH);

    return [snowflake];
  } else {
    let nextIteration = getNextIteration(getKochSnowflake(iteration - 1));
    let sides = [];

    nextIteration.forEach((polyline) => {
      sides.push({
        x1: polyline.points[0].x,
        y1: polyline.points[0].y,
        x2: polyline.points[1].x,
        y2: polyline.points[1].y,
      });
    });

    return nextIteration;
  }
};

/**
 * Object that represents the Koch Snowflake fractal
 */
const kochSnowflake = {
  getKochSnowflake,
};

export default kochSnowflake;
