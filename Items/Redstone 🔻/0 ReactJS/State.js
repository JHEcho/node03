import React, { Component } from 'react';
import { log } from 'ruucm-util';

class MissingChildCard extends Component {
  render() {
    return (
      <div className="card">
        <h1>미아방지 카드</h1>
        <p>이름 : {this.props.name}</p>
        <p>주소 : {this.props.address}</p>
        <p>번호 : {this.props.phone}</p>
      </div>
    );
  }
}

export default class LifeCycle extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      address: '',
      phone: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }
  handleAddressChange(event) {
    this.setState({address: event.target.value});
  }
  handlePhoneChange(event) {
    this.setState({phone: event.target.value});
  }
  render() {
    return (
      <div className="state-default-style">
        <p><label>
          이름:<input type="text" value={this.state.name} onChange={this.handleChange} />
          </label></p>
        <p><label>
          주소:<input type="text" value={this.state.address} onChange={this.handleAddressChange} />
          </label></p>
        <p><label>
          번호:<input type="number" value={this.state.phone} onChange={this.handlePhoneChange} />
          </label></p>         
        <MissingChildCard name={this.state.name} address={this.state.address} phone={this.state.phone} />
      </div>
    );
  }
}
