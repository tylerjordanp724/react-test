import React, { Component } from 'react';
import './button.scss';

export default class Button extends Component {

    handleClick = (e) => {
        const itemState = e.state;
        this.props.onClick(itemState);
    }
    render() {
        return <button className="btn" onClick={ this.handleClick }>{ this.props.text }</button>;
    }
}
