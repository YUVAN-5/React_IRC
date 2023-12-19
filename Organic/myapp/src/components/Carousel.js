import React from 'react';
import { Carousel } from 'react-bootstrap';

const MyCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="fill" style={{ backgroundImage: 'url("http://www.marchettidesign.net/demo/optimized-bootstrap/code.jpg")' }}></div>
        <Carousel.Caption>
          <h2 className="animated fadeInLeft">Caption Animation</h2>
          <p className="animated fadeInUp">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          <p className="animated fadeInUp">
            <a href="#" className="btn btn-transparent btn-rounded btn-large">
              Learn More
            </a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div className="fill" style={{ backgroundImage: 'url("http://www.marchettidesign.net/demo/optimized-bootstrap/conference.jpg")' }}></div>
        <Carousel.Caption>
          <h2 className="animated fadeInDown">Caption Animation</h2>
          <p className="animated fadeInUp">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          <p className="animated fadeInUp">
            <a href="#" className="btn btn-transparent btn-rounded btn-large">
              Learn More
            </a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div className="fill" style={{ backgroundImage: 'url("http://www.marchettidesign.net/demo/optimized-bootstrap/campus.jpg")' }}></div>
        <Carousel.Caption>
          <h2 className="animated fadeInRight">Caption Animation</h2>
          <p className="animated fadeInRight">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          <p className="animated fadeInRight">
            <a href="#" className="btn btn-transparent btn-rounded btn-large">
              Learn More
            </a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;
