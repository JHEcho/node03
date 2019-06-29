import PropTypes from 'prop-types';
import React from 'react';
// Import Styles!
import './background-image-contain.scss';

const BackgroundImageContain = ({ children, className, ...other }) => {
  return (
    <div className="background-image-default-style background-image-contain">
      BacgroundImage Contain
    </div>
  );
};

BackgroundImageContain.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default BackgroundImageContain;
