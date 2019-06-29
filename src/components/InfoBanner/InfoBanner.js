import React, {component} from 'react';
import './InfoBanner.scss';

export default function InfoBannerComponent() {
  return (
    <div className="info-banner">
      <div className="row grid-default-style">
      <div className="col-3">column 01</div>
      <div className="col-6">column 02</div>
      </div>
    </div>
  );
}
