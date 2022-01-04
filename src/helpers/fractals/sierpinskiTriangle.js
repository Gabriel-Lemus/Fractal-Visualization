import mathHelpers from '../mathHelpers';
import svgHelpers from '../svgHelpers';

/**
 * Function that receives an array of SVG path elements and divides them into the next iteration of the Sierpinski Triangle fractal
 * @param {Array.<SVGPathElement>} previousIteration - Array of SVG path elements that represent the previous iteration of the fractal
 * @returns {Array.<SVGPathElement>} Array of SVG path elements that represent the next iteration of the fractal
 */
const getNextIteration = (previousIteration) => {
  const nextIteration = [];

  previousIteration.forEach((triangle) => {
    const points = svgHelpers.getPointsFromPath(triangle, 3);
    const prevSideLength = points[1].x - points[0].x;
    const newSideLength = prevSideLength / 2;
    let newTriangles = [];

    const newPoints = [
      {
        x: points[0].x,
        y: points[0].y,
      },
      {
        x: points[0].x + prevSideLength / 2,
        y: points[0].y,
      },
      {
        x: (points[0].x + prevSideLength / 2 - points[0].x) / 2 + points[0].x,
        y:
          points[0].y -
          mathHelpers.getEquilateralTriangleHeight(prevSideLength) / 2,
      },
    ];
    let newTrianglePoints = [];
    newPoints.forEach((point) => {
      newTrianglePoints.push(
        svgHelpers.getEquilateralTrianglePoints(point, newSideLength)
      );
    });
    newTrianglePoints.forEach((pairOfPoints) => {
      newTriangles.push(svgHelpers.getTrianglePath(pairOfPoints));
    });
    nextIteration.push(...newTriangles);
  });

  return nextIteration;
};

/**
 * Function that returns an array of SVG paths that represent the Sierpinski Triangle fractal
 * @param {Number} iteration - The iteration of the fractal
 * @returns {Array.<SVGPathElement>} Array of SVG paths that represent the Sierpinski Triangle fractal
 */
const getSierpinskiTriangle = (iteration) => {
  if (iteration === 0) {
    const { width, height } = svgHelpers.getSvgDimensions();
    const { beginning, end } = svgHelpers.getDrawingArea();
    let sideLength = end - beginning;

    const lowerLeftTrianglePoint = {
      x: width / 2 - sideLength / 2,
      y: height / 2 + sideLength / 2.3,
    };

    const trianglePoints = svgHelpers.getEquilateralTrianglePoints(
      lowerLeftTrianglePoint,
      sideLength
    );
    const svgTriangle = svgHelpers.getTrianglePath(trianglePoints);

    return [svgTriangle];
  } else {
    return getNextIteration(getSierpinskiTriangle(iteration - 1));
  }
};

/**
 * Object that represents the Sierpinski Triangle fractal
 */
const sierpinskiTriangle = {
  getSierpinskiTriangle,
};

export default sierpinskiTriangle;
