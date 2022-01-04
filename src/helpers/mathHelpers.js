/**
 * Function that converts from degrees to radians
 * @param {Number} degrees - Degrees to convert
 * @returns {Number} Radians
 */
const degreesToRadians = (degrees) => {
  return degrees * (Math.PI / 180);
};

/**
 * Object that contains the math functions
 */
const mathHelpers = {
  degreesToRadians,
};

export default mathHelpers;
