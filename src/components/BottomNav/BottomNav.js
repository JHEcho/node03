import React, {Component} from 'react';
import { Link, Route } from 'react-router-dom';
import './BottomNav.scss';
import { log } from 'ruucm-util'


export default class BottomNavComponent extends Component {
  render() {
    return (
    <div id="blogmenu" className="bottom-nav">
      <div className="row">
        <div className="col-3">
          <Link to='/'>
            <p>About</p>
          </Link>
        </div>
        <div className="col-3">
          <Link to='data-01'>
            <p>Data 01</p>
          </Link>
        </div>
        <div className="col-3">
          <Link to='data-02'>
            <p>Data 02</p>
          </Link>
        </div>
        <div className="col-3">
          <a href="https://github.com/oneybee/datavisual-react">
            <p>Github</p>
          </a>
        </div>
      </div>
    </div>
    )
  }
}



