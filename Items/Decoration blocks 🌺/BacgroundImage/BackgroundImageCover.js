import PropTypes from 'prop-types';
import React from 'react';
// Import Styles!
import './background-image-cover.scss';

const BackgroundImageCover = ({ children, className, ...other }) => {
  return (
    <div className="background-image-default-style background-image-cover">
      BacgroundImage Cover
    </div>
  );
};

BackgroundImageCover.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default BackgroundImageCover;
