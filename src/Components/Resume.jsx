import React, { useContext } from "react";
import { Appstorage } from "../Context/Appstore";
import { Row,Col } from "react-bootstrap";


function Resume() {
    let { a } = useContext(Appstorage)
    return (
       <div className="container" style={{width:'120wh'}}>
              <div>
            <div style={{ display: 'flex', flex: 'column', marginLeft: '790px', marginTop: '20px' }}>
                <h3 style={{ marginRight: '15px' }}>DHARANIDHARAN P</h3>
                <img style={{ width: '150px', height: '180px' }} src={require('../Assest/photoshoot.jpg')} alt="" />
            </div>
            <div style={{ borderBottom: '3px solid black', paddingBottom: '10px'}}>
                <div style={{ marginLeft: '30px', marginBottom: '10px' }}>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                        </svg>
                    </div>
                    <a href="mailto:dharanidharan8607@gmail.com">dharanidharan8607@gmail.com</a>
                </div>
                <div style={{ marginLeft: '30px' }}>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                        </svg>
                    </div>
                    <a href="Contactto:6382872107">+91-6382872107</a>
                </div>
            </div>
            <div style={{marginTop:'15px'}}>
                <div className="row ">
                    <div className="col-lg-4  ">
                        <p style={{ color: 'blue', fontSize: '25px', width: '20px', marginLeft: '30px' }}>Career Objectives</p>

                    </div>
                    <div className="col-lg-8">
                        <p style={{marginTop:'10px',width:'60%'}}>
                            As a computer engineering student, I consider myself a responsible and
                            orderly person. I am looking forward to gain my first work experience
                        </p>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-lg-4  ">
                        <p style={{ color: 'blue', fontSize: '25px', width: '20px', marginLeft: '30px' }}>Academic qualification</p>

                    </div>
                    <div className="col-lg-8">
                        <h4 style={{marginTop:'10px',width:'60%',fontSize:'20px',fontWeight:'600'}}>
                        HINDUSTHAN COLLEGE OF ENGINEERING AND TECHNOLOGY,
COIMBATORE.

                        </h4>
                        <h5 style={{marginTop:'-10px'}}>2020-2024</h5>
                        <p style={{marginTop:'-10px'}}>Bachelor of Engineering in Computer Science</p>
                        <p style={{marginTop:'-15 px'}}>CGPA 8.03</p>
                        <h4 style={{marginTop:'10px',width:'60%',fontSize:'20px',fontWeight:'600'}}>
                            GREEN GARDEN MATRIC HIGHER SEC SCHOOL, PERUNDURAI RS</h4>
                            <h5 style={{marginTop:'-10px'}}>2019-2020</h5>
                            <p style={{marginTop:'-15 px'}}>HSC-60.5%</p>

                            <h4 style={{marginTop:'10px',width:'60%',fontSize:'20px',fontWeight:'600'}} >KONGU VELLALAR MATRIC HIGHER SEC SCHOOL, CHENNIMALAI
                            </h4>
                            <h5 style={{marginTop:'-10px'}}>2017-2018</h5>
                            <p>SSLC-84.8%</p>

                    </div>
                </div>
                <Row style={{marginTop:'15px'}}>
                    <Col lg={4}>
                    <p style={{ color: 'blue', fontSize: '25px', width: '100px', marginLeft: '30px' }}>Area of interest</p>

                    </Col>
                    <Col lg={8}>
                      <li>Front-End Developer</li>
                      <li>Back-End Developer</li>
                    </Col>
                </Row>
                <Row style={{marginTop:'15px'}}>
                    <Col lg={4}>
                    <p style={{ color: 'blue', fontSize: '25px', width: '100px', marginLeft: '30px' }}>Technical Skills</p>

                    </Col>
                    <Col lg={8}>
                    <li>HTML and CSS</li>
                    <li>JAVASCRIPT</li>
                    <li>REACT JS</li>
                    <li>MONGO DB</li>
                    </Col>
                </Row>
                <Row style={{marginTop:'20px'}}>
                    <Col lg={4}>
                    <p style={{ color: 'blue', fontSize: '25px', width: '100px', marginLeft: '30px' }}>Projects</p>

                    </Col>
                    <Col lg={8}>
                    <h5>GAS LEAKAGE DETECTION USING IOT</h5>
                    <p style={{width:'700px',marginLeft:'10px'}}>
                    In this project, the system employs advanced sensors to detect gas leakage
accurately and promptly, while leveraging IoT technology for real-time monitoring
and response. Upon detecting a gas leakage, the system triggers immediate alters
through various communication channels like SMS, mobile applications and Warning
alters dash boards. In this project we used programming language C, some hardware
tools like Arduino IDE, GSM SIM 800c module, MQ6 gas sensor, connecting wires,
SIM card etc.


                    </p>
                    </Col>
                </Row>
                <Row style={{marginTop:'20px'}}>
                    <Col lg={4}>
                    <p style={{ color: 'blue', fontSize: '25px', width: '100px', marginLeft: '30px' }}>Professional Certificates</p>

                    </Col>
                    <Col lg={8}>
                           <li>Data Visualization in IBM</li>
                           <li>DevOps Fundamentals in IBM</li>
                           <li>Design Thinking in IBM</li>
                    </Col>
                </Row>
                <Row style={{marginTop:'20px'}}>
                    <Col lg={4}>
                    <p style={{ color: 'blue', fontSize: '25px', width: '100px', marginLeft: '30px' }}>Personality traits</p>

                    </Col>
                    <Col lg={8}>
                           <li>Able to communicate with others in English</li>
                           <li>Self-Motivated</li>
                           <li>Adaptability</li>
                           <li>Team Work</li>
                    </Col>
                </Row>
                <Row style={{marginTop:'20px'}}>
                    <Col lg={4}>
                    <p style={{ color: 'blue', fontSize: '25px', width: '100px', marginLeft: '30px' }}>Personal Profile</p>

                    </Col>
                    <Col lg={8}>
                          <div>
                            <span style={{fontWeight:'750'}}>
                                  Father's name :
                            </span>
                            <span style={{marginLeft:'10px'}}>
                                    PALANISAMY K
                            </span>
                          </div>
                          <div style={{marginTop:'20px'}}>
                            <span style={{fontWeight:'750'}}>
                                 Date of Birth :
                            </span>
                            <span style={{marginLeft:'10px'}}>
                                  14-11-2002
                            </span>
                          </div>
                          <div style={{marginTop:'20px'}}>
                            <span style={{fontWeight:'750'}}>
                                Nationality :
                            </span>
                            <span style={{marginLeft:'10px'}}>
                                  Indian
                            </span>
                          </div>
                          <div style={{marginTop:'20px'}}>
                            <span style={{fontWeight:'750'}}>
                               Permanent Address :
                            </span>
                            <span style={{marginLeft:'10px', width:'10px'}}>
                                  43-A, Pallakattupudur, Thoppupalayam(post), Chennimalai, Erode District, pincode:638051
                            </span>
                          </div>
                          <div style={{marginTop:'20px'}}>
                            <span style={{fontWeight:'750'}}>
                              Languages Known :
                            </span>
                            <span style={{marginLeft:'10px', width:'10px'}}>
                                 Tamil, English
                            </span>
                          </div>
                    </Col>
                </Row>
              

            </div>
            <div style={{marginLeft:'30px',marginTop:'400px'}}>
                <h5>Declaration</h5>
                <p style={{width:'750px'}}>I hereby declare that all above information is in correct with fact or truth up to my Knowledge and I
                bear the responsibilities for the correctness of the above-mentioned particulars</p>

              <div>
                <Row>
                    <Col>
                      <div>
                        <span style={{fontWeight:'700'}}>Place:</span>
                        <span style={{marginLeft:'10px'}}>Erode</span>
                      </div>
                      <div>
                      <span style={{fontWeight:'700'}}>Date:</span>
                      </div>
                    </Col>
                    <Col>
                    <p>Signature</p>
                    <p>Dharanidharan</p>
                    </Col>
                </Row>
              </div>
            </div>

        </div>
       </div>
    )
}

export default Resume;