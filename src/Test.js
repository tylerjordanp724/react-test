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

    setTitle(title) {
        this.setState({
            title: title
        });
    }

    changeTitle() {
        this.state.title === 'This is a new title' ? this.setTitle('This is a test component') : this.setTitle('This is a new title'); 
       
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