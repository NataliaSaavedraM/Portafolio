import React from "react";
import {Row} from "react-bootstrap"
import './contact.css'




const Contacts =() =>{

  return(

 <div className="containerContact">

<Row className="listContact">
  
  <a className="aContact" href="https://drive.google.com/file/d/1RpR-Rw0hnQuTmahCHSJRFXA_RCJJl56-/view" target="blank"><img className="imgContact"  src="https://i.ibb.co/rQymT8h/curriculos.png" alt="curriculos"/></a>
  <a className="aContact" href="mailto:nataliasaavedram@gmail.com" target="blank"><img className="imgContact" src="https://i.ibb.co/Rp6tJzx/gmail.png" alt="gmail" /></a>
  <a className="aContact" href="https://www.linkedin.com/in/natalia-saavedra-m/" target="blank"><img className="imgContact" src="https://i.ibb.co/dWTQTN4/linkedin.png" alt="linkedin" /></a>
  <a className="aContact" href="https://github.com/nataliaSaavedraM/" target="blank"><img className="imgContact" src="https://i.ibb.co/vBTGNpf/logotipo-de-github.png" alt="logotipo-de-github" /></a>
  <a className="aContact" href="https://stackexchange.com/users/11375482/natalia-saavedra" target="blank"><img className="imgContact" src="https://i.ibb.co/tLNqMGF/Overflow.png" alt="Overflow" /></a>
  <a className="aContact" href="https://wa.me/56954047763" target="blank"><img className="imgContact" src="https://i.ibb.co/JFFpN0b/whatsapp.png" alt="whatsapp"/></a>

</Row>

 </div>





  );
}
export  default Contacts;