import React from 'react';
import './AwesomeElement.scss'

const AwesomeElement = ({ children, className, ...other }) => {
  return <h1 className='awsome-element'>AwesomeElement</h1>;
};

export default AwesomeElement;
