import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ConfirmOrder from '../ConfirmOrder/ConfirmOrder';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './Purchase.css';

const Purchase = () => {
    let {purchaseId} = useParams();
    const [productsDetails, setProductsDetails] = useState([]);
    const [singleProductDetails, setSingleProductDetails] = useState({});

    useEffect(()=>{
        fetch('https://pure-harbor-99970.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProductsDetails(data))
    }, []);

    useEffect(()=>{
        const foundSingleProduct = productsDetails.find(product => product._id === purchaseId);
        setSingleProductDetails(foundSingleProduct);
    }, [productsDetails]);

    return (
        <>
        <Header></Header>
            <div className="pruchase_products">
                <div className="container purchase_inner">
                    <div className="purchase_product_details">
                        <img src={singleProductDetails?.img} alt="" />
                        <div className="purchase_product_info">
                            <h2>{singleProductDetails?.name}</h2>
                            <h4>${singleProductDetails?.price} Million</h4>
                            <p>{singleProductDetails?.description}</p>
                        </div>
                    </div>
                    <div className="order_form">
                        <div className="order_form_title">
                            <h3>Pleare Confirm Your Order</h3>
                        </div>
                        <ConfirmOrder></ConfirmOrder>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Purchase;