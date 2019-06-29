import React, { Component } from 'react';
import { log } from 'ruucm-util';

export default class LifeCycle extends Component {
  constructor() {
    super();
    setTimeout(function(){ log('constructor - 컴포넌트가 로드되기 전입니다.') }, 1000);
  }
  componentDidMount() {
    setTimeout(function(){ log('componentDidMount - 컴포넌트가 로드(마운트) 되었습니다.') }, 1000);
  }
  render() {
    return (
      <div>
        <p>리액트의 LifeCycle에 맞춰 나오는 로그들을 확인하세요</p>
      </div>
    );
  }
}
