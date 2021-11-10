import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container footer_inner">
                <div className="footer_item">
                    <h3>SHOWROOM</h3>
                    <p><span>Address:</span> 999, Kormitola, Mirpur, Dhaka-8932</p>
                    <p><span>Phone:</span> +880 178888888</p>
                    <p><span>E-mail:</span> driveunit@drive.com</p>
                    <p><span>Open:</span> Mon - Fri: 09:00 am to 06:00 pm</p>
                </div>
                <div className="footer_item">
                    <h3>QUICK LINKS</h3>
                    <Link to="/">Blog</Link>
                    <Link to="/">FAQs</Link>
                    <Link to="/">Payment</Link>
                    <Link to="/">Shipment</Link>
                    <Link to="/">Where is my order?</Link>
                    <Link to="/">Return Policy</Link>
                </div>
                <div className="footer_item">
                    <h3>STYLE ADVISOR</h3>
                    <Link to="/">My Account</Link>
                    <Link to="/">Information</Link>
                    <Link to="/">Addresses</Link>
                    <Link to="/">Discound</Link>
                    <Link to="/">Orders History</Link>
                    <Link to="/">Additional Information</Link>
                </div>
                <div className="footer_item">
                    <h3>INFORMATION</h3>
                    <Link to="/">Site Map</Link>
                    <Link to="/">Search Terms</Link>
                    <Link to="/">Advanced Search</Link>
                    <Link to="/">About Us</Link>
                    <Link to="/">Contact Us</Link>
                    <Link to="/">Suppliers</Link>
                </div>
            </div>
            <div className="copyright_text">
                <p>All rights reserved &copy; DriveUnit Inc.</p>
            </div>
        </div>
    );
};

export default Footer;