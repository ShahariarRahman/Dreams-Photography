import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])


    return (
        <div id='services' className='relative mb-36'>
            <div className='text-center  mt-12'>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl text-gray-700 font-bold p-3'><span className='text-sky-600'>
                    <FontAwesomeIcon icon={faCameraRetro}></FontAwesomeIcon>
                    <span className='ml-4'>SERVICES</span>
                </span>
                </h1>
            </div>
            <div className='mt-12 grid md:grid-cols-2 xl:grid-cols-3 gap-7'>
                {services.map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)}
            </div>
        </div>
    );
};

export default Services;