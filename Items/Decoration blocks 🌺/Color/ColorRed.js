import PropTypes from 'prop-types';
import React from 'react';
// Import Styles!
import './color-red.scss';

const ColorRed = ({ children, className, ...other }) => {
  return <div className="color-default-style color-red">Color Red</div>;
};

ColorRed.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default ColorRed;
