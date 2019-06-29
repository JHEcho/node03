import PropTypes from 'prop-types';
import React from 'react';

// Import Styles!
import './importing-icons.scss';
import './using-icons.scss';

const UsingIcons = ({ children, className, ...other }) => {
  return (
    <div className="using-icons-default-style">
      <span className="chief-mate chief-mate-menu" />
      <span className="chief-mate chief-mate-user" />
      <span className="chief-mate chief-mate-bar-graph" />
      <span className="chief-mate chief-mate-circular-graph" />
      <span className="chief-mate chief-mate-github" />
    </div>
  );
};
UsingIcons.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default UsingIcons;
