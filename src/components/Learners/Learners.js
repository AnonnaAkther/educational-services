import React from "react";
import Learner from "../Learner/Learner";
import './Learners.css';

const learners = [
    {
        "name": "Sojib, Bokul, Onu, Binu and Pilu",
        "img": "https://i.ibb.co/RNVJqXk/pic-1.jpg"
    },
    {
        "name": "Onamika",
        "img": "https://i.ibb.co/vJ750wT/pic-2.webp"
    },
    {
        "name": "Mittika",
        "img": "https://i.ibb.co/BB252h9/pic-3.jpg"
    },
    {
        "name": "Dina",
        "img": "https://i.ibb.co/sqw6GLP/pic-4.jpg"
    },
    {
        "name": "Jahangir",
        "img": "https://i.ibb.co/ZYCWCdz/Caucasian-man-sitting-at-the-table-near-laptop-in-the-office-and-looking-at-the-screen-Serious-and-p.jpg"
    },
    {
        "name": "sifa, jannat, kobir, afia, kamal",
        "img": "https://i.ibb.co/VgkJptB/pic-6.jpg"
    }
]

const Learners = () => {
    return (
        
        <div className="card-container mt-5">
            {
                learners.map(learner => <Learner
                key={learner.name}
                learner={learner}
                ></Learner>)
            }
        </div>
    );
};

export default Learners;