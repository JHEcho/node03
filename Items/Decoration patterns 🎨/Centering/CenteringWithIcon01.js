import PropTypes from 'prop-types';
import React from 'react';
import img01 from '../../../assets/images/items/beef_raw.png';
// Import Styles!
import './centering-with-icon-01.scss';

const CenteringWithIcon01 = ({ children, className, ...other }) => {
  return (
    <div className="centering-with-icon-01">
      <div className="with-text">
        <span className="icon chief-mate chief-mate-menu" />
        <a>얍얍</a>
      </div>
      <div className="with-img">
        <span className="icon chief-mate chief-mate-menu" />
        <a>
          <img src={img01} />
        </a>
      </div>
    </div>
  );
};

CenteringWithIcon01.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default CenteringWithIcon01;
