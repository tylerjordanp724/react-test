import React, { Component } from 'react';
import './button.scss';

export default class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: null
        }

        this.handleTitle = this.handleTitle.bind(this);
    }

    handleTitle(e) {
        const title = e.state;
        this.props.onClick(title);
    }

    render() {
        return <button className="btn" text={ this.state.text } onClick={ this.handleTitle }>{ this.props.text }</button>;
    }
}
