import React from 'react';
import '../Index/MainPage.css';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const MainPage = () => {
  return (
    <div>
      <Container className='BodyContainer' fluid >
        <Row>
          <Col md={{ span: 7, offset: 3 }} lg={{ span: 7, offset: 3 }} xl={{ span: 6, offset: 3 }} className='mt-5' >
            <Accordion className='Accordion' defaultActiveKey={['0']} flush >
              <Accordion.Item eventKey="0">
                <Accordion.Header>What is Hotel Management System</Accordion.Header>
                <Accordion.Body>
                  Hospital Management System is an organized computerized system designed and
                  programmed to deal with day to day operations and management of the hospital
                  activities. The program can look after inpatients, outpatients, records, database
                  treatments, status illness, billings in the pharmacy and labs. It also maintains hospital
                  information such as ward id, doctors in charge and department administering. The
                  major problem for the patient nowadays to get report after consultation , many
                  hospital managing reports in their system but it's not available to the patient when he /
                  she is outside. In this project we are going to provide the extra facility to store the
                  report in the database and make available from anywhere in the world.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>What Are Benefits Of A Hospital Management System?</Accordion.Header>
                <Accordion.Body>
                  The Hospital Management Information System Software allows easy access to patient data to generate various records, including classification based on demographic, gender, age, and so on. It is especially beneficial at the ambulatory point, hence enhancing continuity of care. Internet-based access improves the ability to access such data remotely.
                  It helps as a decision support system for the hospital authorities for developing comprehensive health care policies.
                  It efficiently engenders the running of finance, the diet of patients, and also the distribution of medical aid. It gives a vivid picture of future hospital growth.
                  It reflects an improved drug usage monitoring system, including its effectiveness.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Modules of eHospital Systems</Accordion.Header>
                <Accordion.Body>
                  <h6>
                    Patient Registration <br />
                    Appointment & Scheduling<br />
                    Outpatient Management<br />
                    Inpatient Management<br />
                    Billing<br />
                    Discharge Summary<br />
                    Laboratory Management<br />
                    Radiology Management<br />
                    Pharmacy Management<br />
                  </h6>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Notable Features of a Health Information System or a Hospital Management Software</Accordion.Header>
                <Accordion.Body>
                  A Hospital Management System (HMS) is a software designed to handle electronic medical records, laboratory tests and their results, radiology images, pharmacy records etc. It helps in managing patient data efficiently so that hospitals can provide better care and services.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Conclusion
                </Accordion.Header>
                <Accordion.Body>
                  Hospital Management System (HMS) is essential to the delivery of modern healthcare. It can boost patient outcomes, lower medical errors, and improve the overall quality of care. It enables hospitals with a centralized platform to manage their operations, automate mundane processes, and enhance communication.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
      
    </div>
  )
}

export default MainPage