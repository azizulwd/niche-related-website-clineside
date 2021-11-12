import React from 'react';
import './Product.css';

const Product = (props) => {
    const {_id, name, description, img, price} = props.product
    return (
        <div className="product">
            <img src={img} alt="" />
            <div className="product_info">
                <h2>{name}</h2>
                <h4>${price} Million</h4>
                <p>{description}</p>
                <button>Purchase</button>
            </div>
        </div>
    );
};

export default Product;