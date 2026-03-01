import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";



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
              imgPath={leaf}
              isBlog={false}
              title="Smart Health Assistance"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Farmer App"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
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