import PropTypes from 'prop-types';
import React from 'react';
// Import Style!
import './border-radius-30.scss';

const BorderRadius30 = ({ children, className, ...other }) => {
  return (
    <div className="border-radius-30 box-default-style">BorderRadius 30px</div>
  );
};

BorderRadius30.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default BorderRadius30;
