import React from 'react';
import Services from '../Services/Services';
import Title from '../Title/Title';
import bannar from '../../../images/bannar.jpg';

const Home = () => {
    return (
        <header className='max-w-screen-2xl m-auto' id='home'>
            <img className='w-full sticky top-0 rounded-b-2xl' src={bannar} alt="" />
            <div className='bg-sky-50 relative'>
                <div className='px-4 sm:px-6 lg:px-8' >
                    <div className='mx-auto'>
                        <Title></Title>
                        <Services></Services>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Home;