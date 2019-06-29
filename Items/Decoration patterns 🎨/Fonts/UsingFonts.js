import PropTypes from 'prop-types';
import React from 'react';

// Import Styles!
import './importing-fonts.scss';
import './using-fonts.scss';

const UsingFonts = ({ children, className, ...other }) => {
  return (
    <div className="using-fonts-default-style">
      <p>Import한 폰트를 'font-family' 속성을 이용해 사용해보세요 😃</p>
      <p>Using 'font-family' property to use imported Fonts 😃</p>
    </div>
  );
};
UsingFonts.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default UsingFonts;
