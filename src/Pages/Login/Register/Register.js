import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import loginLogo from '../../../images/logo.png';
import { Link } from 'react-router-dom';

const Register = () => {


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
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <input type="password" placeholder="Re-type Password" />
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