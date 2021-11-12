import React from 'react';

const Product = (props) => {
    const {_id, name, description, img, price} = props.product
    return (
        <div className="product">
            <img src={img} alt="" />
        </div>
    );
};

export default Product;