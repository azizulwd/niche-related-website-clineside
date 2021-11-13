import React from 'react';
import Reviews from '../../Reviews/Reviews';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Offer from '../Offer/Offer';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Products></Products>
            <Offer></Offer>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;