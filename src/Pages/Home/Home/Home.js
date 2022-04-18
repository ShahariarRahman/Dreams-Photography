import React from 'react';
import Services from '../Services/Services';
import Title from '../Title/Title';
import bannar from '../../../images/bannar.jpg';

const Home = () => {
    return (
        <div className='bg-gray-200' id='home'>
            <img className='w-full sticky top-0' src={bannar} alt="" />
            <div className='bg-gray-200 relative'>
                <div className='mx-auto px-4 sm:px-6 lg:px-8 ' >
                    <div className='max-w-7xl mx-auto'>
                        <Title></Title>
                        <Services></Services>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;