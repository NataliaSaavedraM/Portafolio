import React from "react";
import { Navbar, Nav} from 'react-bootstrap';
import './navegation.css'
function Navigation () {
  return (

<div>
<Navbar bg="light" expand="lg" >
  <Navbar.Brand href="/home"><p className="link">NS</p></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav primary">
    <Nav className="ml-auto light">
      <Nav.Link href="/Home" ><p className="link">Home</p></Nav.Link>
      <Nav.Link href="/Aboutme"><p className="link">Sobre Mi</p></Nav.Link>
      <Nav.Link href="/Projects"><p className="link">Proyectos</p></Nav.Link>
      <Nav.Link href="/Skills"><p className="link">Habilidades</p></Nav.Link>
      <Nav.Link href="/Contact"><p className="link">Contacto</p></Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

</div>

  );
}
export default Navigation;
