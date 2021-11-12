import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/products', data)
        .then(res =>{
            if(res.data.insertedId){
                alert('Added Successfully');
                reset();
            }
        });
    };


    return (
        <div className="add_product_main">
            <div className="add_product">
                <h1>Add Product</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name")} placeholder="Car name" />
                    <textarea {...register("description")} placeholder="Description" />
                    <input type="number" {...register("price")} placeholder="Price" />
                    <input {...register("img")} placeholder="img url" />
                    <input type="submit" value="Add Product" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;