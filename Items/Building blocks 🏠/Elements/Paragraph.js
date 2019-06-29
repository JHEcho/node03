import PropTypes from 'prop-types';
import React from 'react';

const Paragraph = ({ children, className, ...other }) => {
  return <p>This is some text in a paragraph.</p>;
};

Paragraph.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Paragraph;
