import PropTypes from 'prop-types';
import React from 'react';
// Import Styles!
// import './grid.scss';

const Grid4Columns = ({ children, className, ...other }) => {
  return (
    <div className="row grid-default-style">
      <div className="col-3">column 01</div>
      <div className="col-3">column 02</div>
      <div className="col-3">column 03</div>
      <div className="col-3">column 04</div>
    </div>
  );
};

Grid4Columns.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Grid4Columns;
