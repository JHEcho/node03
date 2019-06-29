import PropTypes from 'prop-types';
import React from 'react';

// Import Styles!
import './importing-fonts.scss';

const ImportingFonts = ({ children, className, ...other }) => {
  return (
    <div>
      <p>Import Local Fonts before set 'font-family'</p>
    </div>
  );
};

ImportingFonts.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default ImportingFonts;
