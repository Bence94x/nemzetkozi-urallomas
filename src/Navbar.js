import React from 'react';
import { Link } from 'react-router-dom';

import './App.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <h1><Link to="/">Kezdőlap</Link></h1>
                <div className="links">
                    <li><Link className="li" to="/Map">Térkép</Link></li>
                    <li><Link className="li" to="/Name">Info</Link></li>
                </div>
            </div>

        </nav>
    );
}

export default Navbar;