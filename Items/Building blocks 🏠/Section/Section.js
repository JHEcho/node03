import PropTypes from 'prop-types';
import React from 'react';
// Import Styles!
import './section.scss';

const Section = ({ children, className, ...other }) => {
  return (
    <div className="section">
      <div className="section-contents">section contents</div>
    </div>
  );
};

Section.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Section;
