import React from 'react';
import Button from './Button';
import './test.scss';


class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'This is a test component'
        }

        this.changeTitle = this.changeTitle.bind(this);
    }

    changeTitle() {
        if(this.state.title === 'This is a test component') {
            this.setState({
                title: 'This is a new title'
            });
        } else {
            this.setState({
                title: 'This is a test component'
            });
        }
    }

    render() {
        return(
            <div className="test-container">
                <h1>{this.state.title}</h1>
                <Button text="Click the button" onClick={this.changeTitle}/>
            </div>
        );
    }
};
 
export default Test;