import React from 'react';

import logo from '../../static/media/logo.svg';
import './header.scss';

function Header() {
    return (
        <header className="app-header">
            <div>
                <img src={logo} className="logo" alt="logo"/>
                <h1 className="title">Page Title</h1>
            </div>
        </header>
    );
}

export default Header;
