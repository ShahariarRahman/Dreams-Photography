import React from 'react';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';




const Checkout = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        toast("Thank You for the Booking !")
    }
    return (
        <div>
            <div className="flex items-center justify-center pt-7 px-4 sm:px-6 lg:px-8 mb-96">
                <div className="max-w-md w-full space-y-8 shadow-md hover:shadow-lg hover:shadow-sky-300 shadow-sky-200 p-12 rounded-2xl">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-sky-800">Submit this form</h2>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        <input type="hidden" name="remember" value="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div  >
                                <label htmlFor="user-name" className="sr-only">Email address</label>
                                <input id="user-name" name="user-name" type="text" className="appearance-none rounded-none block w-full px-3 py-2 border border-sky-400 placeholder-sky-600 text-sky-700 rounded-t-md focus:outline-none sm:text-sm bg-sky-50" placeholder="Name" />
                            </div>
                            <div>
                                <label htmlFor="email-address" className="sr-only">Email </label>
                                <input id="email-address" name="email" type="email" required className="appearance-none rounded-none block w-full px-3 py-2 border border-sky-400 placeholder-sky-600 text-sky-700 focus:outline-none sm:text-sm bg-sky-50" placeholder="Email" />
                            </div>
                            <div>
                                <label htmlFor="email-address" className="sr-only">Address</label>
                                <input id="email-address" name="email" type="text" required className="appearance-none rounded-none block w-full px-3 py-2 border border-sky-400 placeholder-sky-600 text-sky-700 focus:outline-none sm:text-sm bg-sky-50" placeholder="Address" />
                            </div>

                            <div>
                                <label htmlFor="phone" className="sr-only">Phone number</label>
                                <input id="phone" name="phone" type="number" autocomplete="current-password" required className="appearance-none rounded-none block w-full px-3 py-2 border border-sky-400 placeholder-sky-600 text-sky-700 rounded-b-md focus:outline-none sm:text-sm bg-sky-50" placeholder="Phone number" />
                            </div>
                        </div>




                        <div>
                            <button type="submit" className=" w-full flex justify-center py-2 px-4 border text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-sky-600">
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