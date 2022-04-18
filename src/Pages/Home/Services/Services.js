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
        <div id='services' >
            <div className='text-center relative mt-12'>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl text-gray-700 font-bold p-3'><span className='text-indigo-700'>
                    <FontAwesomeIcon icon={faCameraRetro}></FontAwesomeIcon>
                    <span className='ml-3'>Services</span>
                </span>
                </h1>
            </div>
            <div className='mt-12 grid md:grid-cols-2 xl:grid-cols-3 gap-3 '>
                {services.map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)}
            </div>
        </div>
    );
};

export default Services;