import React, {Component} from 'react';
import './Data02.scss'

class Data02Component extends Component {
  constructor() {
    super()
    this.state = {
      data02: [],
    }
  }
  componentDidMount() {
  }
  render() {
    return (
      <div className="data-02">
        <h1>Data 02</h1>
      </div>
    )
  }
}

export default Data02Component;