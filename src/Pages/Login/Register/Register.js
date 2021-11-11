import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import loginLogo from '../../../images/logo.png';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});

    const {registerUser} = useAuth();

    const handleOnChanged = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData);
    }

    const handleLoginForm = e =>{
        e.preventDefault();
        if(loginData.password !== loginData.password2){
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password);
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
                            <input onChange={handleOnChanged} type="text" placeholder="Name" name="name" />
                            <input onChange={handleOnChanged} type="email" placeholder="Email" name="email" />
                            <input onChange={handleOnChanged} type="password" placeholder="Password" name="password" />
                            <input onChange={handleOnChanged} type="password" placeholder="Re-type Password" name="password2" />
                            <button type="submit">Register</button>
                        </form>
                        <Link to="/login">Already have an account? Please Login.</Link>
                    </div>
                </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;