import React, { Component } from 'react';
import './button.scss';

export default class Button extends Component {

    handleTitle = (e) => {
        const title = e.state;
        this.props.onClick(title);
    }
    render() {
        return <button className="btn" onClick={ this.handleTitle }>{ this.props.text }</button>;
    }
}
