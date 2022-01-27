import React, { useEffect, useState } from 'react';
import MoreService from '../MoreService/MoreService';
import './MoreServices.css';

const MoreServices = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('./services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[]);
  
    return(
        <div className="card-container mt-5 mb-5">
            {
                services.map(service => <MoreService
                key={service.id}
                service={service}
                ></MoreService>)
            }
        </div>
    )
};

export default MoreServices;