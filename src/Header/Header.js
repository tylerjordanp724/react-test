import React, { Component } from 'react';
import MenuButton from './MenuButton';
import MainNav from './MainNav';
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
                <MenuButton onClick={ this.menuToggle }/>
                <MainNav />
            </div>
        );
    }
}
