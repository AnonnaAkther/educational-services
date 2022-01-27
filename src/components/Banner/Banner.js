import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../banner/71-S0xAYCkL._AC_SX425_.jpg';
import banner2 from '../../banner/images (1).jpg';
import banner3 from '../../banner/images (2).jpg';
import banner4 from '../../banner/images (3).jpg';
import banner5 from '../../banner/images.jpg';

const Banner = () => {
    return (
<Carousel className="mt-5 mb-5">
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />
    <Carousel.Caption>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />
    <Carousel.Caption>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner4}
      alt="Third slide"
    />
    <Carousel.Caption>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner5}
      alt="Third slide"
    />
    <Carousel.Caption>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
};

export default Banner;