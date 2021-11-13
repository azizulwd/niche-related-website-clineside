import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://pure-harbor-99970.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);

    return (
        <div className="products">
            <div className="products_title">
                <h1>Choose your Dream Car</h1>
            </div>
            <div className="container products_inner">
                {
                    products.slice(0, 6).map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;