import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const MoreService = (props) => {
    const {name, img, price} = props.service;
    return (
        <>
          <CardGroup>
  <Card>
    <Card.Img variant="top" src={img} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
       {price}
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>
        </>
    );
};

export default MoreService;