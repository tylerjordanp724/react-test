import React, { Component } from 'react';
import Header from '../Header/Header';
import Test from '../Test/Test';
export default class App extends Component {
  render() {
    return (
      <div className="main">
        <Header/>
        <Test/>
      </div>
    );
  }
}