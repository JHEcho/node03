import PropTypes from 'prop-types';
import React from 'react';

const HeadingH2 = ({ children, className, ...other }) => {
  return <h2>Headings H2</h2>;
};

HeadingH2.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default HeadingH2;
