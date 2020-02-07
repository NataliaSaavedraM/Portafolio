
import React from "react";
import {Container, Card,Row} from  'react-bootstrap';



const card =() => {
  return (


<Container fluid="md">
 <Row>
<Card style={{ width: '15rem' }}>
  <Card.Img variant="top" src="https://i.ibb.co/BwQ0C9t/reciclaje1.png" />
  <Card.Body>
    <Card.Title>Javascript</Card.Title>
    <Card.Text >
     Aplicación enlazada a Firebase que tiene como proposito fomentar el reciclaje y generar actividad economica en torno a esta area.
    </Card.Text>
    <Card.Link href="#">Deploy</Card.Link>
    <Card.Link href="#">Code</Card.Link>
  </Card.Body>
</Card>
 
<Card style={{ width: '15rem' }}>
  <Card.Img variant="top" src="https://i.ibb.co/TWJ1gnh/icon.png" />
  <Card.Body>
    <Card.Title>React Native</Card.Title>
    <Card.Text>
     Aplicación movil con proposito recreativo, enfocado a niñas de 5 a 8 años y fans de Hello Kitty.
    </Card.Text>
    <Card.Link href="#">Deploy</Card.Link>
    <Card.Link href="#">Code</Card.Link>
  </Card.Body>
</Card>

<Card style={{ width: '15rem' }}>
  <Card.Img variant="top"  src="https://i.ibb.co/QDnhHGF/logo.png" />
  <Card.Body>
    <Card.Title>React </Card.Title>
    <Card.Text>
     Aplicación enlazada a firebase offline que busca mejorar los tiempos del servicio en un restorant.
    </Card.Text>
    <Card.Link href="#">Deploy</Card.Link>
    <Card.Link href="#">Code</Card.Link>
  </Card.Body>
</Card>
<Card style={{ width: '15rem' }}>
  <Card.Img variant="top"  src="https://i.ibb.co/frX8vhr/imagen-Portada3.png"/>
  <Card.Body>
    <Card.Title>Javascript</Card.Title>
    <Card.Text>
     Pagina web que tiene como target a estudiantes, academicos y profesionales  relacionados a las ciencias sociales que requieren informacion sobre el rol de la mujer.
    </Card.Text>
    <Card.Link href="#">Deploy</Card.Link>
    <Card.Link href="#">Code</Card.Link>
  </Card.Body>
</Card>
<Card style={{ width: '15rem' }}>
  <Card.Img variant="top"  src="https://i.ibb.co/h8cyfFS/CinePlay.png" />
  <Card.Body>
    <Card.Title>Javascript</Card.Title>
    <Card.Text>
     Aplicación en Javascript con Api que tiene como objetivo desarrollar una estrategia de Promocion Fomentando las visitas al cine y al consumo de snacks en este con una trivia.
    </Card.Text>
    <Card.Link href="#">Deploy</Card.Link>
    <Card.Link href="#">Code</Card.Link>
  </Card.Body>
</Card>
</Row>
</Container>
     
    
  );
};
export default card;
