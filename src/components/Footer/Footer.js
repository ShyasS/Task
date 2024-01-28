import React from 'react'
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div>
      <Container className='Footer' fluid >
        <Row>
          <Col sm md={{ span: 4, offset: 1 }} className='mt-5' >
            <h5 >HealthCare Portfolio</h5>
            Advance HIMS<br />
            EMR/EHR<br />
            Virtual Care<br />
            LIMS<br />
            RIS/PACS<br />
            Pharmacy<br />
            Connected Ambulance<br />
            AI Healthcare<br />
            Homecare
          </Col>
          <Col sm md={{ span: 4, offset: 0 }} className='mt-5 me-0' id='col2'  >
            <h5 >Solutions</h5>
            Hospital Healthcare Platform<br />
            Governent e-Health Platform<br />
            Governent e-Health Platform<br />
            Practice Management Platform<br />
            Digital Diagnostic Platform<br />
            Digital Pharmacy Platform<br />
            Connected Ambulance Platform
          </Col>
          <Col smmd={{ span: 4, offset: 4 }} className='mt-5' >
            <h5 >Solutions</h5>
            <Link style={{ textDecoration: 'none' }}><FontAwesomeIcon icon={faFacebook} style={{ fontSize: '30px' }} /> <FontAwesomeIcon icon={faTwitter} style={{ fontSize: '30px', marginLeft: '3px' }} /> <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '30px', marginLeft: '3px' }} />   <FontAwesomeIcon icon={faLinkedinIn} style={{ fontSize: '30px', marginLeft: '3px' }} /></Link>   <br />
            Governent e-Health Platform<br />
            Governent e-Health Platform<br />
            Practice Management Platform<br />
            Digital Diagnostic Platform<br />
            Digital Pharmacy Platform<br />
            Connected Ambulance Platform
          </Col>
          <Col sm md={{ span: 4, offset: 4}} className='mt-5' style={{color:'white'}}> © Copyright 2024 HMS, Inc. All rights reserved. Apply</Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer