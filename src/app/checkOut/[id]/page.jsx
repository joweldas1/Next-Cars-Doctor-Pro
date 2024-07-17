import CheckOut from '@/app/component/shared/CheckOut';
import { getServiceDetails } from '@/service/getServices';
import React from 'react';

const page = async({params}) => {
    const data =await getServiceDetails(params.id)
    const service =await data?.data?.service;
  


    return (
       <>
       
       <CheckOut service={service} />
       </>
    );
};

export default page;