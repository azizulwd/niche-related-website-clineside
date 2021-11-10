import React from 'react';
import bannerbg from '../../../images/banner-bg.png';
import './Banner.css';

const Banner = () => {

    const bannerStyle = {
        width: '100%',
        height: '550px',
        backgroundImage: `url(${bannerbg})`
    }

    return (
        <div className="banner" style={bannerStyle}>
            <div className="banner_inner">
                <div className="banner_content">
                    <h3>TOP BRANDS 2021</h3>
                    <h1><span>MODERN-CLASSIC</span> <br />DECORATIVE</h1>
                    <p>GET 5% OFF ON SELECTED ITEMS.</p>
                    <button>Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;