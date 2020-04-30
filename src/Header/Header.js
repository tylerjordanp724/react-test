import React, { Component } from 'react';
import './header.scss';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuClosed: true,
            menuOpen: ''
        }
        this.menuToggle = this.menuToggle.bind(this);
    }

    setMenuState = (menuClosed, menuOpen) => {
        this.setState({
            menuClosed: menuClosed,
            menuOpen: menuOpen
        });
    }

    menuToggle = () => {
        this.state.menuClosed ? this.setMenuState(false, ' menu-open') : this.setMenuState(true, '');
    }

    render() {
        return (
            <div className={ `header${ this.state.menuOpen }` }>
                <div className="menu-btn" onClick={ this.menuToggle }>
                    <div className="menu-slice"></div>
                    <div className="menu-slice"></div>
                    <div className="menu-slice"></div>
                </div>
                <div className="main-nav">
                    <div className="main-menu">
                        <ul>
                            <li>Menu Item 1</li>
                            <li>Menu Item 2</li>
                            <li>Menu Item 3</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
