import React, {component} from 'react';
import './InfoBanner.scss';

export default function InfoBannerComponent() {
  return (
    <div className="info-banner">
      <h1>Mate Test</h1>
      <div className="row grid-default-style">
      <div className="background img-1"><p className="textSZ">Text1</p><p>sub text1</p></div>
      <div className="background img-2"><p className="textSZ">Text2</p><p>subtext2</p></div>
      </div>
    </div>
  );
}

