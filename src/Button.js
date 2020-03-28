import React from 'react';
import './button.scss';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: null
        }
    }

    onClick() {
        window.alert("LET'S FUCKIN' GOOOOOOO!!!");
    }

    render() {
        return <button className="btn" text={this.state.text} onClick={this.onClick}>{this.props.text}</button>;
    }
}

export default Button;