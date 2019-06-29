import React, {Component} from 'react';
import './Data01.scss';

// import Heading1 from '../../../stories/Building blocks 🏠/Elements/Heading1'

import InfoBanner from '../../components/InfoBanner'
import Span from '../../../Items/Building blocks 🏠/Elements/Span'


class Data01Component extends Component {
  constructor() {
    super()
  }
  componentDidMount() {
  }
  render() {
    return (
      <div className="data-01">
        <InfoBanner />
        <h1>Data 01</h1>
        {/* <Heading1 /> */}
        <Span />
      </div>
    )
  }
}

export default Data01Component;