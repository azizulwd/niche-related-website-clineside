import React from 'react';
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
            <Footer></Footer>
        </div>
    );
};

export default Home;