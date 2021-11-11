import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import './Login.css';
import loginLogo from '../../../images/logo.png';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {user, loginUser, authError} = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChanged = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginForm = e =>{
        e.preventDefault();
        loginUser(loginData.email, loginData.password, location, history);
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
                        {user?.email && <span id="login_success">Successfully Loged In</span>}
                        {authError && <span id="login_error">{authError}</span>}
                        <form onSubmit={handleLoginForm}>
                            <input onChange={handleOnChanged} type="email" placeholder="Email" name="email" />
                            <input onChange={handleOnChanged} type="password" placeholder="Password" name="password" />
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