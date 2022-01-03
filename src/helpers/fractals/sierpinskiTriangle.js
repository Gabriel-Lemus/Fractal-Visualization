import helpers from '../helpers';
import svgHelpers from '../svgHelpers';

const getSierpinskiTriangle = (iteration) => {
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
  getSierpinskiTriangle,
};

export default kochSnowflake;
