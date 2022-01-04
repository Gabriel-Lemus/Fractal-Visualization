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
  const height = sidelength / 2 * Math.sqrt(3);

  return height;
};

/**
 * Object that contains the math functions
 */
const mathHelpers = {
  degreesToRadians,
  radiansToDegrees,
  getEquilateralTriangleHeight,
};

export default mathHelpers;
