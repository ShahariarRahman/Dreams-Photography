import React from 'react';
import img from '../../images/profile/profile.jpg';

const About = () => {
    return (
        <div className='flex justify-center mt-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 '>
            <div className='w-3/4 h-3/4 shadow-lg bg-white flex flex-col items-center rounded-xl p-8'>
                <img className='rounded-full h-32 w-32' src={img} alt="" />
                <div className='w-full px-4'>
                    <h2 className='text-2xl font-semibold mt-4 text-center'>Md. Shahariar Rahman Sumon</h2>
                    <h3 className='text-xl font-semibold mt-4 underline '>Goal : </h3>
                    <h4 className='text-xl mt-2'> I want a full-stack web developer. I am trying my best for this.
                        I want to gain a lot of skills so that I can be a skilled web developer. I am trying hard and practicing coding as much time as much I get. I hope Allah will help me to earn my goal.
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default About;