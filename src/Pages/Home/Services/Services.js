import React, { useEffect, useState } from 'react';
import ServiceData from './ServiceData';
const Services = () => {
    const [service, setService] = useState([])
    useEffect(()=>{
        fetch('https://learn-code-server-lovat.vercel.app/services')
        .then(res => res.json())
        .then(data=> setService(data))
    },[])
    return (
        <div className="flex items-center justify-center">
        <div className="grid grid-cols-3 gap-6 my-5">
           {
            service.map(s=> <ServiceData key={s._id} s={s}></ServiceData>)
           }
        </div>
        </div>
    );
};

export default Services;