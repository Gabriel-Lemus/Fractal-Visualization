/**
 * Function that converts from degrees to radians
 * @param {Number} degrees - Degrees to convert
 * @returns {Number} Radians
 */
const degreesToRadians = (degrees) => {
  return degrees * (Math.PI / 180);
};

/**
 * Function that converts from radians to degrees
 * @param {Number} radians - Radians to convert
 * @returns {Number} Degrees
 */
const radiansToDegrees = (radians) => {
  return radians * (180 / Math.PI);
};

/**
 * Function to get the height of an equilateral triangle based on the given sidelength
 * @param {Number} sidelength - Sidelength of the equilateral triangle
 * @returns {Number} Height of the equilateral triangle
 */
const getEquilateralTriangleHeight = (sidelength) => {
  const height = (sidelength / 2) * Math.sqrt(3);

  return height;
};

/**
 * Function to get the point between two points given a distance
 * @param {{ x: Number, y: Number }} beginning - First point
 * @param {{ x: Number, y: Number }} end - Second point
 * @param {Number} distance - Ratio of the distance between the two points
 * @returns {{ x: Number, y: Number }} Point between the two points
 */
const getPointBetweenTwoPoints = (beginning, end, distance) => {
  const x = beginning.x + (end.x - beginning.x) * distance;
  const y = beginning.y + (end.y - beginning.y) * distance;

  return { x, y };
};

/**
 * Object that contains the math functions
 */
const mathHelpers = {
  degreesToRadians,
  radiansToDegrees,
  getEquilateralTriangleHeight,
  getPointBetweenTwoPoints,
};

export default mathHelpers;
