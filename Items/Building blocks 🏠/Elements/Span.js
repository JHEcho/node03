import PropTypes from 'prop-types';
import React from 'react';
import './span.scss';

const Span = ({ children, className, ...other }) => {
  return (
    <p>
      My mother has <span>blue</span> eyes and my father has{' '}
      <span>dark green</span> eyes.
    </p>
  );
};

Span.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Span;
