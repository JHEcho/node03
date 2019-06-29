import PropTypes from 'prop-types';
import React from 'react';
// Import Style!
import './border-radius-50.scss';

const BorderRadius50p = ({ children, className, ...other }) => {
  return (
    <div className="border-radius-50p box-default-style">BorderRadius 50%</div>
  );
};

BorderRadius50p.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default BorderRadius50p;
