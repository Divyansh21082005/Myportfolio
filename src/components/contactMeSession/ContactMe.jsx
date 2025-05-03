import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import ContactMeLeft from './ContactMeLeft'
import ContactMeRight from './ContactMeRight'
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
    
  } from "react-icons/ai";
  import { FaLinkedinIn } from "react-icons/fa"
  import { MdOutlineMailLock } from "react-icons/md";

function ContactMe(){
  return (
    <Container>
    <div >
      <br></br>
      <br></br>
      

      <div>
        <ContactMeLeft/>
        <ContactMeRight/>
        <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Divyansh21082005"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/Divyans44341149"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/divyansh-yadav"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/v_a_s_h_u_d_e_v_04"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
           
          </Col>
          {/* <li className="social-icons">
        
               
          <MdOutlineMailLock  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"/><p>divyanshyadav2108@gmail.com</p>
         
          </li> */}
        
      </div>
    </div>
    </Container>
  )
 
}

export default ContactMe
