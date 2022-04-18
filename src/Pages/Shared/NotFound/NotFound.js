import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='bg-gray-200'>
            <div >
                <div className="w-9/12 m-auto pt-16  justify-center ">
                    <div>
                        <div className="text-center pt-8">
                            <h1 className="text-9xl font-bold text-indigo-600">404</h1>
                            <h1 className="text-6xl font-medium py-8">oops! Page not found</h1>
                            <p className="text-2xl pb-8 px-12 font-medium">Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>
                            <button className="bg-indigo-600 hover:bg-indigo-700  text-white font-semibold px-6 py-3 rounded-md mr-6">
                                <Link to='/'> HOME</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound; <h2>Not Found</h2>