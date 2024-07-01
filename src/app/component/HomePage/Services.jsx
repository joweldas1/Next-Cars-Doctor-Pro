import React from 'react';
import ServiceCard from '../Cards/ServiceCard';
import { services } from '@/lib/services';

const Services = () => {
    return (
        <div className='my-10 container mx-auto'>
            <div>
                <h1 className='text-primary text-xl font-semibold text-center'>Service</h1>
                <h1 className='text-slate-700 text-4xl font-semibold text-center'>Our Service Area</h1>
            </div>
            <div className='grid grid-cols-3'>
                {
                    services.map((data,idx)=>(<ServiceCard key={idx} data={data}/>))
                }
            
            </div>
        </div>
    );
};

export default Services;