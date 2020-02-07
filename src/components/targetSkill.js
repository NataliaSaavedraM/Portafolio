import React from "react";
import { Container, Col, Row, Spinner } from "react-bootstrap";
import "./targetSkill.css";

const Skill = props => {
  return (
    <Container>
      <Container fluid>
        <Row>
         
          <Col>
            {" "}
            <Spinner animation="grow"  size="sm" />
            <Spinner animation="grow"  />
            <span className="titleSkill"> Bases de Datos</span>{" "}
            <Spinner animation="grow"  />
            <Spinner animation="grow"  size="sm" />
          </Col>
          <Row> <img src="https://i.ibb.co/5hSrvXm/firebase.jpg"  alt="firebase" className="iconSkill"/><img src="https://i.ibb.co/YjfjFS2/microsoftsqlserver.png"  alt="microsoftsqlserver" className="iconSkill"/><img src="https://i.ibb.co/J3YL5jB/mysql.png" alt="mysql"  className="iconSkill"/></Row> 
        </Row>
        <Row>
         
          <Col>
            {" "}
            <Spinner animation="grow"  size="sm" />
            <Spinner animation="grow"  />
            <span className="titleSkill">Lenguajes y Librerías</span>{" "}
            <Spinner animation="grow"  />
            <Spinner animation="grow"  size="sm" />
          </Col>
          <Row></Row>
        </Row>
        <Row>
          <Row><img src="https://i.ibb.co/tmW0dMG/lenguajes-Base.png" alt="lenguajes-Base" className="iconSkill"/><img src="https://i.ibb.co/1dPpB5t/Bootstrap.png" alt="Bootstrap"  className="iconSkill"/><img src="https://i.ibb.co/BZb00Kb/java.png" alt="java" className="iconSkill"/></Row>
          <Row><img src="https://i.ibb.co/h8MqHM6/react.png" alt="react" className="iconSkill"/><img src="https://i.ibb.co/whRNfZM/react-Boostrap.png" alt="react-Boostrap" className="iconSkill"/><img src="https://i.ibb.co/WvQSRLc/React-Native.png" alt="React-Native"  className="iconSkill"/></Row>
          <Col>
            {" "}
            <Spinner animation="grow"  size="sm" />
            <Spinner animation="grow"  />
            <span className="titleSkill">
              {" "}
            Herramientas de Planificacion y Comunicación
            </span>{" "}
            <Spinner animation="grow"  />
            <Spinner animation="grow"  size="sm" />
          </Col>
        </Row>
        <Row><img src="https://i.ibb.co/RYSxvd0/jira.png" alt="jira"  className="iconSkills"/><img src="https://i.ibb.co/zG423XL/Atlassian-Confluence.jpg" alt="Atlassian-Confluence"   className="iconSkills"/><img  className="iconSkills"/><img src="https://i.ibb.co/fnd8N0V/trello-logo.png" alt="trello" className="iconSkills"/><img src="https://i.ibb.co/Kh3pR1f/Slack-Logo.png" alt="Slack"  className="iconSkills"/></Row>
        
      </Container>
    </Container>
  );
};
export default Skill;
