import React from 'react';
import Header from '../Header/Header';
import Button from '../Button/Button';
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
    //Lifecycle methods can go here


    render() {
        return(
            <div className="main">
                <Header/>
                <div className="test-container">
                    <h1>{ this.state.title }</h1>
                    <Button text="Click the button" onClick={ this.changeTitle }/>
                </div>
            </div>
        );
    }
};

export default Test;