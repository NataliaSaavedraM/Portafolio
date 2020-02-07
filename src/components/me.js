import React from "react";
import { Container, Image, Row, Col} from 'react-bootstrap';
import './navegation.css'
function Presentation() {
  return (

<Container d-flex>
<Row><br></br></Row>

<Row>
    <Col  xs={{ order: 1 }}><Image src="https://i.ibb.co/tJG1XNk/foto.jpg" roundedCircle  /></Col>
    <Col xs={{ order: 12 }}><br></br><br></br><br></br><br></br><h4>Frond-end Developer</h4><p className='aboutmeText' >Que mira el código sin descuidar el Modelo de Negocio, sabiendo que el éxito de este está en la Experiencia del Usuario.
Soy de profesión Ingeniero Comercial, con especialización en Marketing y Bachiller en Ciencias Sociales. Es quizás por esta razón que siempre que codifico pienso en quienes van a usar la aplicación y cual es el mercado de esta. 
</p></Col>
  </Row>


</Container>
  );
}
export default Presentation;