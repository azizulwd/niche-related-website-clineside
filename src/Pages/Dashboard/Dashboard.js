import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Dashboard.css';

const Dashboard = () => {
    const {user, logOut} = useAuth();

    return (
        <div className="dashboard">
            <div className="dashboard_inner">
                <div className="container dashboard_navbar_parent">
                    <div className="dashboard_logo">
                        <Link to="/dashboard"><h1>Dashboard</h1></Link>
                    </div>
                    <div className="dashboard_navbar">

                        {
                            user?.email ? <div>
                                    <Link to="/pay">Pay</Link>
                                    <Link to="/myorders">My orders</Link>
                                    <Link to="/reviews">Review</Link>
                                    <button onClick={logOut}>Logout</button>
                                </div>
                            :
                            <span></span>
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;