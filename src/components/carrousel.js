import React from "react";
import {Carousel} from 'react-bootstrap';
import './carrousel.css'




const CarouselHomy = ()=>{

  return(
   /*  <Container fluid>
    <Image src="https://i.ibb.co/WsrV7sc/questions.jpg" />
    </Container> */


    <Carousel>
  <Carousel.Item>
  
    <img
      className="d-block w-100"
      src="https://i.ibb.co/z5NnKrP/codigo2.png" 
      alt="First slide"
    />
    <Carousel.Caption>
    <h3 className='caption1'>Natalia Alexandra Saavedra Madariaga</h3>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/WsrV7sc/questions.jpg" 
      alt="Third slide"
    />

    <Carousel.Caption>
    <h3 className='caption2'>Natalia Alexandra Saavedra Madariaga</h3>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/GQm3X1v/datos.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
    <h3 className='caption3'>Natalia Alexandra Saavedra Madariaga</h3>
     
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>






 

  );
}
export  default CarouselHomy;