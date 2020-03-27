import React from 'react';
import Button from './Button';
import './test.scss';


class Test extends React.Component {

    render() {
        return(
            <div className="test-container">
                <h1>This is a test component</h1>
                <Button text="Click me, bitch!"/>
            </div>
        );
    }
};

export default Test;