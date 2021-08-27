import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <img src="img/Rick_and_Morty_logo.png" className="logo-img" alt="Rick and Morty logo" />
            <div className="navigation">
                <Link to="/" className="nav-link">Episodes List</Link>
                <Link to="/watchlist" className="nav-link">My Watch List</Link>
            </div>
        </div>
    )
}

export default Header
