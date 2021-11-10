import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="container header_inner">
                <div className="logo">
                    <Link to="/"><h1>DriveUnit</h1></Link>
                </div>
                <div className="navigate_menu">
                    <Link to="/explore">Explore</Link>
                    <Link to="/login">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;