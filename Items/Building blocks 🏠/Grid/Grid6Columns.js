import PropTypes from 'prop-types';
import React from 'react';
// Import Styles!
// import './grid.scss';

const Grid6Columns = ({ children, className, ...other }) => {
  return (
    <div className="row grid-default-style">
      <div className="col-2">column 01</div>
      <div className="col-2">column 02</div>
      <div className="col-2">column 03</div>
      <div className="col-2">column 04</div>
      <div className="col-2">column 05</div>
      <div className="col-2">column 06</div>
    </div>
  );
};

Grid6Columns.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Grid6Columns;
