import PropTypes from 'prop-types';
import React from 'react';
// Import Styles!
import './color-custom.scss';

const ColorCustom = ({ children, className, ...other }) => {
  return <div className="color-default-style color-custom">Color Custom</div>;
};

ColorCustom.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default ColorCustom;
