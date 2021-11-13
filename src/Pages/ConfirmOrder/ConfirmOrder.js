import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';

const ConfirmOrder = () => {
    const {user} = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.name} {...register("name")} />
                <input defaultValue={user.email} {...register("email", { required: true })} />
                <input {...register("address")} placeholder="Address" />
                <input {...register("phone")} placeholder="Phone" />
                <input {...register("city")} placeholder="City" />
                {errors.email && <span>This field is required</span>}
                <input type="submit" value="Confirm Order" />
            </form>
        </div>
    );
};

export default ConfirmOrder;