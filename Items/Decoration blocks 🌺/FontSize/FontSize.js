import PropTypes from 'prop-types';
import React from 'react';
// Import Styles!
import './font-size.scss';

const FontSize = ({ children, className, ...other }) => {
  return (
    <div className="fontsize-default-style">
      <p className="font-size-10">font-size 10px</p>
      <p className="font-size-20">font-size 20px</p>
      <p className="font-size-20p">font-size 20%</p>
    </div>
  );
};

FontSize.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default FontSize;
