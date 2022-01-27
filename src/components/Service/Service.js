import React from 'react';
import { Card } from 'react-bootstrap';
import './Service.css';

const Service = ({service}) => {
    const { name, price, img } = service;

    return (
        <Card className="mb-5 bg-dark text-black">
  <Card.Img className="card" src={img} alt="Card image" />
  <Card.ImgOverlay className="card-title">
    <Card.Title>{name}</Card.Title>
    <Card.Text>{price}</Card.Text>
  </Card.ImgOverlay>
</Card>
    );
};

export default Service;