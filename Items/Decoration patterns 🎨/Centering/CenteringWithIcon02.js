import PropTypes from 'prop-types';
import React from 'react';
import img01 from '../../../assets/images/items/beef_raw.png';
// Import Styles!
import './centering-with-icon-02.scss';

const CenteringWithIcon02 = ({ children, className, ...other }) => {
  return (
    <div className="centering-with-icon-02">
      <div className="with-text">
        <span className="icon chief-mate chief-mate-menu" />
        <p>얍얍</p>
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

CenteringWithIcon02.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default CenteringWithIcon02;
