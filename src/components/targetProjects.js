
import React from "react";
import {Container, Card,Row} from  'react-bootstrap';
import './targetProjects.css'


const card =() => {
  return (


<Container fluid="md">
 <Row>
<Card style={{ width: '15rem' }} >
  <Card.Img variant="top" src="https://i.ibb.co/BwQ0C9t/reciclaje1.png" />
  <Card.Body>
    <Card.Title ><h2>Javascript</h2></Card.Title>
    <Card.Text >
    <p> Aplicación enlazada a Firebase que tiene como proposito fomentar el reciclaje y generar actividad economica en torno a esta area.</p>
    </Card.Text>
    <Card.Link href="https://reciclaje-unidos.firebaseapp.com/">Deploy</Card.Link>
    <Card.Link href="https://github.com/NataliaSaavedraM/SCL011-SocialNetwork">Code</Card.Link>
  </Card.Body>
</Card>
 
<Card style={{ width: '15rem' }}>
  <Card.Img variant="top" src="https://i.ibb.co/TWJ1gnh/icon.png" />
  <Card.Body>
    <Card.Title><h2>React Native</h2></Card.Title>
    <Card.Text>
     Aplicación movil con proposito recreativo, enfocado a niñas de 5 a 8 años y fans de Hello Kitty.
    </Card.Text>
    <Card.Link href="https://claseslaboratoria.slack.com/files/UM599TB24/FT2KEB81Z/scl011-tic-tac-toe-b5bdfc5d1bee4366acf4fba041ee9493-signed.apk">Deploy</Card.Link>
    <Card.Link href="https://github.com/NataliaSaavedraM/SCL011-Tic-Tac-Toe">Code</Card.Link>
  </Card.Body>
</Card>

<Card style={{ width: '15rem' }}>
  <Card.Img variant="top"  src="https://i.ibb.co/QDnhHGF/logo.png" />
  <Card.Body>
    <Card.Title><h2>React</h2> </Card.Title>
    <Card.Text>
     Aplicación enlazada a firebase offline que busca mejorar los tiempos del servicio en un restorant.
    </Card.Text>
    <Card.Link href="https://burger-queen-2dc5a.firebaseapp.com/">Deploy</Card.Link>
    <Card.Link href="https://github.com/NataliaSaavedraM/SCL011-Burger-Queen">Code</Card.Link>
  </Card.Body>
</Card>
<Card style={{ width: '15rem' }}>
  <Card.Img variant="top"  src="https://i.ibb.co/frX8vhr/imagen-Portada3.png"/>
  <Card.Body>
    <Card.Title><h2>Javascript</h2></Card.Title>
    <Card.Text>
     Pagina web que tiene como target a estudiantes, academicos y profesionales  relacionados a las ciencias sociales que requieren informacion sobre el rol de la mujer.
    </Card.Text>
    <Card.Link href="https://nataliasaavedram.github.io/SCL011-data-lovers/src/index.html">Deploy</Card.Link>
    <Card.Link href="https://github.com/NataliaSaavedraM/SCL011-data-lovers">Code</Card.Link>
  </Card.Body>
</Card>
<Card style={{ width: '15rem' }}>
  <Card.Img variant="top"  src="https://i.ibb.co/h8cyfFS/CinePlay.png" />
  <Card.Body>
    <Card.Title><h2>Javascript</h2></Card.Title>
    <Card.Text>
     Aplicación en Javascript con Api que tiene como objetivo desarrollar una estrategia de Promocion Fomentando las visitas al cine y al consumo de snacks en este con una trivia.
    </Card.Text>
    <Card.Link href="https://www.figma.com/file/KgGJWAPaw5zqZrGTeQpG3K/CinePlay?node-id=0%3A1">Deploy</Card.Link>
    <Card.Link href="https://github.com/NataliaSaavedraM/SCL-011-Hackaton-">Code</Card.Link>
  </Card.Body>
</Card>
</Row>
</Container>
     
    
  );
};
export default card;
