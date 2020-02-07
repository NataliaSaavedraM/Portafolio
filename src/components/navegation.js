import React from "react";
import { Navbar, Nav} from 'react-bootstrap';
import './navegation.css'
function Navigation () {
  return (

<div>
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">NS</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="/Home">Home</Nav.Link>
      <Nav.Link href="/Aboutme">Sobre Me</Nav.Link>
      <Nav.Link href="/Projects">Proyectos</Nav.Link>
      <Nav.Link href="/Skills">Habilidades</Nav.Link>
      <Nav.Link href="/Contact">Contacto</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

</div>

  );
}
export default Navigation;
