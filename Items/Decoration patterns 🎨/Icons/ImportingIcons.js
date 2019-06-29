import PropTypes from 'prop-types';
import React from 'react';

// Import Styles!
import './importing-icons.scss';

const ImportingIcons = ({ children, className, ...other }) => {
  return (
    <div>
      <p>Import Local Icons before using 'chief-mate' icons set 🔫</p>
    </div>
  );
};

ImportingIcons.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default ImportingIcons;
