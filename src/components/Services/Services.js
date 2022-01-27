import React from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const services = [
        {
            "id":1,
            "name":"Sobuj learning club",
            "price":"$120",
            "img":"https://i.ibb.co/CvVSWqN/download.jpg"
            },
            {
                "id":2,
                "name":"Nicolais learning club",
                "price":"$230",
                "img":"https://i.ibb.co/4SSxNJg/A-Caucasian-female-elementary-school-teacher-helps-her-student-in-her-classroom.jpg"
                },
                {
                    "id":3,
                    "name":"Samia learning club",
                    "price":"$140",
                    "img":"https://i.ibb.co/v4h980d/images.jpg"
                    },
                    {
                        "id":4,
                        "name":"Helenka learning club",
                        "price":"$250",
                        "img":"https://i.ibb.co/nRgvJkf/theroleofbod.jpg"
                    }
                   
    ]
    return (
        <div className="service-container">
            {
                services.map(service => <Service
                key={service.id}
                service={service}
                ></Service>)
            }
        </div>
    );
};

export default Services;