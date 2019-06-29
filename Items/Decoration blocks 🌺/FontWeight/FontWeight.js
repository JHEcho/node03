import PropTypes from 'prop-types';
import React from 'react';
// Import Styles!
import './font-weight.scss';

const FontWeight = ({ children, className, ...other }) => {
  return (
    <div className="fontweight-default-style">
      <p className="font-weight-100">font-weight 100(Light)</p>
      <p className="font-weight-400">font-weight 400(Regular)</p>
      <p className="font-weight-700">font-weight 700(Bold)</p>
      <p className="font-weight-900">font-weight 900(Extra Bold)</p>
    </div>
  );
};

FontWeight.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default FontWeight;
