import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, price, img, description } = service;
    return (
        <div className='shadow-lg bg-white flex flex-col items-center rounded-lg w-full'>
            <img className='w-full rounded-t-lg' src={img} alt="" />
            <div className='w-full px-4'>
                <h2 className='text-2xl font-semibold mt-2'>{name}</h2>
                <h3 className='text-xl font-semibold mt-2'>Price: ${price}</h3>
                <h4 className='text-md mt-2'>Description: {description}</h4>
                <button className='w-full  bg-indigo-500 hover:bg-indigo-700 text-white text-md my-5 rounded-lg py-2'>
                    <Link to={`/checkout/${id}`}>Checkout</Link>
                </button>
            </div>
        </div>
    );
};

export default Service;