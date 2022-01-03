import helpers from '../helpers';
import svgHelpers from '../svgHelpers';

const getKochSnowflake = (iteration) => {
  return svgHelpers.getSvgPolyline(
    [
      { x: 0, y: 0 },
      { x: 10, y: 1 },
    ],
    helpers.PALETTE.darkBlue,
    1
  );
};

const kochSnowflake = {
  getKochSnowflake,
};

export default kochSnowflake;
