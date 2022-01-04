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
 * Object that contains the math functions
 */
const mathHelpers = {
  degreesToRadians,
  radiansToDegrees,
};

export default mathHelpers;
