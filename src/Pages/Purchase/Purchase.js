import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

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
        <div>
            <h1>{singleProductDetails?.name}</h1>
        </div>
    );
};

export default Purchase;