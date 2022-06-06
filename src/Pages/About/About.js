import React from 'react';
import img from '../../images/profile/profile.jpg';

const About = () => {
    return (
        <div>
            <div className='flex justify-center mt-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen text-gray-800'>
                <div className='w-3/4 h-1/4 shadow-lg hover:shadow-xl  flex flex-col items-center rounded-xl p-8'>
                    <img className='rounded-full h-32 w-32' src={img} alt="" />
                    <div className='w-full px-4 text-center'>
                        <h2 className='text-2xl my-4 text-center'>Name: Md. Shahariar Rahman Sumon</h2>
                        <h4 className='text-xl font-thin'><span className='font-normal'>Goal:</span> I want to be a full-stack web developer. I am trying my best for this.I want to gain a lot of skills so that I can be a skilled web developer. I am trying hard and practicing coding as much time as much I get. I hope Allah will help me to reach my goal.
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;