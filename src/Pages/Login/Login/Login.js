import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import './Login.css';
import loginLogo from '../../../images/logo.png';
import { Link } from 'react-router-dom';

const Login = () => {


    const handleLoginForm = e =>{
        e.preventDefault();
    }

    return (
        <div>
            <Header></Header>
                <div className="login">
                    <div className="login_inner">
                        <div className="login_header">
                            <img src={loginLogo} alt="" />
                            <h1>DriveUnit</h1>
                        </div>
                        <form onSubmit={handleLoginForm}>
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <button type="submit">Login</button>
                        </form>
                        <Link to="/register">New user? Create an account.</Link>
                    </div>
                </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;