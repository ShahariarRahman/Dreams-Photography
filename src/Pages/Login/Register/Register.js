import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleRoof } from '@fortawesome/free-solid-svg-icons';


const Register = () => {

    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, emailPassUser, emailPassLoading, emailPassError] = useCreateUserWithEmailAndPassword(auth, {
        sendEmailVerification: true
    });

    const [signInWithGoogle, googleUser, gooleLoading, googleError] = useSignInWithGoogle(auth);


    let error;
    if (emailPassError || googleError) {
        error = <div className='text-red-700'> {emailPassError?.message || googleError?.message
        } </div>;
    }

    if (emailPassLoading || gooleLoading) {
        return <Loading></Loading>;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value;
        createUserWithEmailAndPassword(email, password)
            .then(() => navigate('/'));
    }


    return (
        <div className="flex items-center justify-center pt-7 px-4 sm:px-6 lg:px-8  mb-52">
            <div className="max-w-md w-full space-y-8 shadow-md hover:shadow-lg hover:shadow-sky-300 shadow-sky-200 p-12 rounded-2xl">
                <div>
                    <div className='flex justify-center mt-8 text-sky-700'>
                        <FontAwesomeIcon className='h-12' icon={faPeopleRoof}></FontAwesomeIcon>
                    </div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-sky-700">Register your account</h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div  >
                            <label for="name" className="sr-only">Email address</label>
                            <input id="name" name="name" type="text" className="appearance-none rounded-none block w-full px-3 py-2 border border-sky-400 placeholder-sky-600 text-sky-700 rounded-t-md focus:outline-none sm:text-sm bg-sky-50" placeholder="Name" />
                        </div>

                        <div  >
                            <label for="email" className="sr-only">Email address</label>
                            <input id="email" name="email" type="email" required className="appearance-none rounded-none block w-full px-3 py-2 border border-sky-400 placeholder-sky-600 text-sky-700  focus:outline-none sm:text-sm bg-sky-50" placeholder="Email address" />
                        </div>
                        <div>
                            <label for="password" className="sr-only">Password</label>
                            <input id="password" name="password" type="password" required className="appearance-none rounded-none block w-full px-3 py-2 border border-sky-400 placeholder-sky-600 text-sky-700 rounded-b-md focus:outline-none sm:text-sm bg-sky-50" placeholder="Password" />
                        </div>
                    </div>

                    {error}
                    <div>
                        <button type="submit" className=" w-full flex justify-center py-2 px-4 border text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-sky-600">
                            Register
                        </button>
                    </div>

                    <div className="flex items-center justify-center">
                        <div className="text-sm">
                            <Link to='/login' className="font-medium text-sky-600 hover:text-sky-700"> Already have an Account ?</Link>
                        </div>
                    </div>
                </form>

                <div className="grid sm:grid-cols-3 gap-0 mb-6">
                    <hr className="mt-3 hidden sm:block border-sky-500" />
                    <span className="text-center  text-sm text-sky-700 font-normal">Or continue with</span>
                    <hr className="mt-3 hidden sm:block border-sky-500" />
                </div>

                <div>
                    <button onClick={() => signInWithGoogle()} type="button" className="border-solid border shadow-sm border-sky-400
                        py-1 px-0 rounded w-full focus:outline-none hover:border-sky-600 transition-all duration-200">
                        <div className='flex justify-center'>
                            <svg fill="#1f70aa" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">    <path d="M 15.003906 3 C 8.3749062 3 3 8.373 3 15 C 3 21.627 8.3749062 27 15.003906 27 C 25.013906 27 27.269078 17.707 26.330078 13 L 25 13 L 22.732422 13 L 15 13 L 15 17 L 22.738281 17 C 21.848702 20.448251 18.725955 23 15 23 C 10.582 23 7 19.418 7 15 C 7 10.582 10.582 7 15 7 C 17.009 7 18.839141 7.74575 20.244141 8.96875 L 23.085938 6.1289062 C 20.951937 4.1849063 18.116906 3 15.003906 3 z" /></svg>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;