import React from 'react';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


const handleSubmit = (e) => {
    e.preventDefault();
    toast("Thank You for the Booking !")
}

const Checkout = () => {
    return (
        <div>
            <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-200">
                <div className="max-w-md w-full space-y-8 shadow-xl hover:shadow-2xl p-12 rounded-2xl">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Submit this form</h2>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        <input type="hidden" name="remember" value="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div  >
                                <label for="user-name" className="sr-only">Email address</label>
                                <input id="user-name" name="user-name" type="text" className="appearance-none rounded-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none sm:text-sm" placeholder="Name" />
                            </div>
                            <div>
                                <label for="email-address" className="sr-only">Email </label>
                                <input id="email-address" name="email" type="email" required className="appearance-none rounded-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none sm:text-sm" placeholder="Email" />
                            </div>
                            <div>
                                <label for="email-address" className="sr-only">Address</label>
                                <input id="email-address" name="email" type="text" required className="appearance-none rounded-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none sm:text-sm" placeholder="Address" />
                            </div>

                            <div>
                                <label for="phone" className="sr-only">Phone number</label>
                                <input id="phone" name="phone" type="number" autocomplete="current-password" required className="appearance-none rounded-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none sm:text-sm" placeholder="Phone number" />
                            </div>
                        </div>




                        <div>
                            <button type="submit" className=" w-full flex justify-center py-2 px-4 border text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Submit
                            </button>
                        </div>


                    </form>

                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Checkout;