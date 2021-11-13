import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Purchase.css';

const Purchase = () => {
    let {purchaseId} = useParams();
    const [productsDetails, setProductsDetails] = useState([]);
    const [singleProductDetails, setSingleProductDetails] = useState({});

    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProductsDetails(data))
    }, []);

    useEffect(()=>{
        const foundSingleProduct = productsDetails.find(product => product._id === purchaseId);
        setSingleProductDetails(foundSingleProduct);
    }, [productsDetails]);

    return (
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
                    <h1>Purchase product</h1>
                </div>
            </div>
        </div>
    );
};

export default Purchase;