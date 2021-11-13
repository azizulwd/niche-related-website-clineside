import React, { useEffect, useState } from 'react';
import Product from '../Home/Product/Product';
import './Explore.css';

const Explore = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);


    return (
        <div className="explore_all_products">
            <div className="explore_title">
                <h1>Choose your Dream Car</h1>
            </div>
            <div className="container explore_products_inner">
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Explore;