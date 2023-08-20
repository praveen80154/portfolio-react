// import "./Contact.css";

import { Col, Container, Row } from "react-bootstrap";
import Particle from "../Particle";

// import Send from "./Send";
export default function Contact( ) {
    return <>
        <Container  fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
         Contact Me
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
         
          
              <Col md={4} className="project-card" >
               e
              </Col>
        
        
        </Row>
      </Container>
      
    </Container></>
}