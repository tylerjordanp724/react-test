import React from 'react';
import './header.scss';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="main-nav">
                    <div className="menu-btn">
                        <div className="menu-slice"></div>
                        <div className="menu-slice"></div>
                        <div className="menu-slice"></div>
                    </div>
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