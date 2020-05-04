import React, { Component } from 'react';
import './header.scss';

export default class MainNav extends Component {
  render() {
    return (
      <div className="main-nav">
        <div className="main-menu">
          <ul>
            <li>Menu Item 1</li>
            <li>Menu Item 2</li>
            <li>Menu Item 3</li>
          </ul>
        </div>
      </div>
    );
  }
}