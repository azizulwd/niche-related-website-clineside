import React from 'react';
import './Offer.css';
import offer1 from '../../../images/world-icon.png';
import offer2 from '../../../images/car-sold-logo.png';
import offer3 from '../../../images/tag-icon.png';
import offer4 from '../../../images/compare-logo.png';

const Offer = () => {
    return (
        <div className="offers">
            <div className="offers_title">
                <h1>Have a look our Stategy</h1>
            </div>
            <div className="container offer_inner">
                <div className="offer">
                    <div className="offer_img">
                        <img src={offer1} alt="" />
                    </div>
                    <div className="offer_content">
                        <h3>World's #1</h3>
                        <p>Largest Auto portal</p>
                    </div>
                </div>
                <div className="offer">
                    <div className="offer_img">
                        <img src={offer2} alt="" />
                    </div>
                    <div className="offer_content">
                        <h3>Car sold</h3>
                        <p>Every 4 minutes</p>
                    </div>
                </div>
                <div className="offer">
                    <div className="offer_img">
                        <img src={offer3} alt="" />
                    </div>
                    <div className="offer_content">
                        <h3>Offers</h3>
                        <p>Stay updated pay less</p>
                    </div>
                </div>
                <div className="offer">
                    <div className="offer_img">
                        <img src={offer4} alt="" />
                    </div>
                    <div className="offer_content">
                        <h3>Compare</h3>
                        <p>Decode the right car</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;