import React from 'react';
import './button.scss';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'test'
        }
    }

    onClick() {
        window.alert('I was clicked');
    }

    render() {
        return <button className="btn" onClick={this.onClick}>{this.state.text}</button>;
    }
}

export default Button;