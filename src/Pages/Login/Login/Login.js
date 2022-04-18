import React, { useRef } from 'react';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

import camera from '../../../images/camera.png';
import Loading from '../../Shared/Loading/Loading';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const emailRef = useRef('');

    const navigate = useNavigate();

    const location = useLocation();
    const [user, loading, authError] = useAuthState(auth);

    const [signInWithEmailAndPassword, emailPassUser, emailPassLoading, emailPassError] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, googleUser, gooleLoading, googleError] = useSignInWithGoogle(auth);

    const [sendPasswordResetEmail, sending, passReseterror] = useSendPasswordResetEmail(auth);

    let error;
    if (emailPassError || googleError || authError) {
        error = <div className='text-red-700'> {emailPassError?.message || googleError?.message || authError?.message
        } </div>;
    }

    if (loading || emailPassLoading || gooleLoading) {
        return (
            <div>
                <Loading></Loading>
            </div>
        );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password)
    };

    const handlePasswordReset = async () => {
        if (emailRef.current.value) {
            await sendPasswordResetEmail(emailRef.current.value);
            toast("Password reset mail has sent to your account");
        }
    }


    const from = location?.state?.from?.pathname || '/';

    if (user) {
        navigate(from, { replace: true });
    }


    return (
        <div className="flex items-center justify-center py-4 px-4 sm:px-6 lg:px-8 bg-gray-200">
            <div className="max-w-md w-full space-y-8 shadow-xl hover:shadow-2xl p-12 rounded-2xl">
                <div>
                    <img className="mx-auto h-20 w-auto" src={camera} alt="" />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Login to your account</h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit} >
                    <input type="hidden" name="remember" value="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label for="email" className="sr-only">Email address</label>
                            <input id="LoginEmail" ref={emailRef} name="email" type="email" required className="appearance-none rounded-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none sm:text-sm" placeholder="Email address" />
                        </div>
                        <div>
                            <label for="password" className="sr-only">Password</label>
                            <input id="LoginPassword" name="password" type="password" required className="appearance-none rounded-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none sm:text-sm" placeholder="Password" />
                        </div>
                    </div>

                    {error}

                    <div className="flex items-center justify-between">
                        <div className="text-sm">
                            <button onClick={handlePasswordReset} className="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your password? </button>
                        </div>
                    </div>

                    <div>
                        <button type="submit" className=" w-full flex justify-center py-2 px-4 border text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Sign in
                        </button>
                    </div>

                    <div className="flex items-center justify-center">
                        <div className="text-sm">
                            <Link to='/register' className="font-medium text-indigo-600 hover:text-indigo-500">Create an Account ?</Link>
                        </div>
                    </div>
                </form>

                <div className="grid sm:grid-cols-3 gap-0 mb-6">
                    <hr className="mt-3 hidden sm:block border-gray-400" />
                    <span className="text-center bg-white text-sm text-gray-700 font-normal">Or continue with</span>
                    <hr className="mt-3 hidden sm:block border-gray-400" />
                </div>

                <div >
                    <button onClick={() => signInWithGoogle()} type="button" className="border-solid border shadow-sm border-gray-400
                         py-1 px-0 rounded w-full focus:outline-none hover:border-indigo-600 transition-all duration-200">
                        <div className='flex justify-center'>
                            <svg fill="#4b5563" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">    <path d="M 15.003906 3 C 8.3749062 3 3 8.373 3 15 C 3 21.627 8.3749062 27 15.003906 27 C 25.013906 27 27.269078 17.707 26.330078 13 L 25 13 L 22.732422 13 L 15 13 L 15 17 L 22.738281 17 C 21.848702 20.448251 18.725955 23 15 23 C 10.582 23 7 19.418 7 15 C 7 10.582 10.582 7 15 7 C 17.009 7 18.839141 7.74575 20.244141 8.96875 L 23.085938 6.1289062 C 20.951937 4.1849063 18.116906 3 15.003906 3 z" /></svg>
                        </div>
                    </button>
                </div>
                <ToastContainer />
            </div>
        </div>

    );
};

export default Login;