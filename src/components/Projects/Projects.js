import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import leaf from "../../Assets/Projects/leaf.png";
import suicide from "../../Assets/Projects/suicide.png";




function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="InstaMart"
              description="Instamart is a modern web application built to provide fast, convenient online grocery shopping and delivery services. It allows users to browse products, add items to a cart, place orders, and track deliveries — all from a clean, responsive interface."
              ghLink="https://github.com/Divyansh21082005/JAVA/tree/main/instamartnew"
              
            />
          </Col>

         

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Portfolio"
              description="My personal PortFolio page build with Next.js and  Css which takes the content from makdown files and renders it using Next.js"
              ghLink="https://github.com/Divyansh21082005/Myportfolio"
              demoLink="https://divyanshyadav2108.netlify.app/"
                          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Smart Health Assistance"
              description="Dedicated to streamlining the healthcare experience by connecting people with the right resources, clear options, and reliable support when they need it most."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Farmer App"
              description="Building an e-commerce architecture to connect farmers directly with buyers (eliminating middlemen) or allowing them to purchase seeds and fertilizers safely."
              ghLink=""
               demoLink=""
            />
          </Col>

          
               
            
         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;