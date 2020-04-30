import React from 'react';
import './header.scss';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            menuClose: true,
            menuButtonInactive: true
        }
    }

    // this.setState({
    //     menuOpen: menuOpen,
    //     menuButtonActive: menuButtonActive
    // })

    // menuToggle() {
    //     var isMenuBtnActive = this.state.menuButtonActive,
    //         isMenuOpen = this.state.menuOpen;

    //     isMenuBtnActive ? this.setState({ menuButtonActive: true }) : this.setState({ menuButtonActive: false });
    // }


    render() {
        return (
            <div className="header">
                <div className="menu-btn" onClick={this.menuToggle}>
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

export default Header;