import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const {user, logOut} = useAuth();

    return (
        <div className="header">
            <div className="container header_inner">
                <div className="logo">
                    <Link to="/"><h1>DriveUnit</h1></Link>
                </div>
                <div className="navigate_menu">
                    <Link to="/explore">Explore</Link>
                    {
                        user?.email ? <button onClick={logOut}>Logout</button>
                        :
                        <Link to="/login">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;