import React, { Component } from 'react';
import './header.scss';

export default class MenuButton extends Component {

  handleMenu = (e) => {
    const menuState = e.state;
    this.props.onClick(menuState);
  }
  render() {
    return (
      <div className="menu-btn" onClick={ this.handleMenu }>
        <div className="menu-slice"></div>
        <div className="menu-slice"></div>
        <div className="menu-slice"></div>
      </div>
    );
  }
}