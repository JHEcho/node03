import PropTypes from 'prop-types';
import React from 'react';

// Import Style!
import './border-radius-10.scss';

const BorderRadius10 = ({ children, className, ...other }) => {
  return (
    <div className="border-radius box-default-style">BorderRadius 10px</div>
  );
};

BorderRadius10.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default BorderRadius10;
