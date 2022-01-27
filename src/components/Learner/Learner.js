import React from 'react';
import { Card } from 'react-bootstrap';

const Learner = ({learner}) => {
    const {name, img} = learner;
    return (
        
        <div className="card">
            <h1 className="text-center text-primary">OUR EXPERT LEARNER</h1>
            <Card className="bg-dark text-primary">
        <Card.Img src={img} alt="Card image" />
        <Card.ImgOverlay>
            <Card.Title>{name}</Card.Title>
        </Card.ImgOverlay>
        </Card>
        </div>
    );
};

export default Learner;