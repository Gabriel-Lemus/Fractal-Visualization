import svgHelpers from '../svgHelpers';

/**
 * Function that receives an array of SVG elements and divides them into the next iteration of the fractal
 * @param {Array.<SVGPathElement>} previousIteration - Array of SVG elements that represent the previous iteration of the fractal
 * @returns {Array.<SVGPathElement>}
 */
const getNextIteration = (previousIteration) => {
  const nextIteration = [];

  previousIteration.forEach((sponge) => {
    const points = svgHelpers.getPointsFromPath(sponge);
    const sideLength = (points[1].y - points[0].y) / 3;
    let newSponges = [];

    for (let y = 0; y < 3; y++) {
      for (let x = 0; x < 3; x++) {
        if (x !== 1 || y !== 1) {
          let newPoints = [
            {
              x: points[0].x + x * sideLength,
              y: points[0].y + y * sideLength,
            },
            {
              x: points[0].x + x * sideLength,
              y: points[0].y + (y + 1) * sideLength,
            },
            {
              x: points[0].x + (x + 1) * sideLength,
              y: points[0].y + (y + 1) * sideLength,
            },
            {
              x: points[0].x + (x + 1) * sideLength,
              y: points[0].y + y * sideLength,
            },
          ];

          newSponges.push(svgHelpers.getSquarePath(newPoints));
        }
      }
    }

    nextIteration.push(...newSponges);
  });

  return nextIteration;
};

/**
 * Function that returns an array of SVG paths that represent the Menger Sponge fractal
 * @param {Number} iteration - The iteration of the fractal
 * @returns {Array.<SVGPathElement>}
 */
const getMengerSponge = (iteration) => {
  if (iteration === 0) {
    const { width, height } = svgHelpers.getSvgDimensions();
    const { beginning, end } = svgHelpers.getDrawingArea();
    let spongeValue1 = beginning;
    let spongeValue2 = height;
    let spongeValue3 = end;
    let spongeValue4 = height;

    if (height > width) {
      spongeValue1 = width;
      spongeValue2 = beginning;
      spongeValue3 = width;
      spongeValue4 = end;
    }

    const points = [
      { x: beginning, y: 0 },
      { x: spongeValue1, y: spongeValue2 },
      { x: spongeValue3, y: spongeValue4 },
      { x: end, y: 0 },
    ];

    const SVGSquare = svgHelpers.getSquarePath(points);

    return [SVGSquare];
  } else {
    return getNextIteration(getMengerSponge(iteration - 1));
  }
};

/**
 * Object that represents the Menger Sponge fractal
 */
const mengerSponge = {
  getMengerSponge,
};

export default mengerSponge;
