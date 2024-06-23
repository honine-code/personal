import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link as ScrollLink, Element } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendar, faMapMarkerAlt, faPhone, faEnvelope, faGraduationCap, faCode, faServer, faDatabase, faTools, faDesktop, faBriefcase, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import ProjectCarousel from '../components/ProjectCarousel';
import './Home.css';
import {LinkContainer} from "react-router-bootstrap";

const Home: React.FC<{ section?: string }> = ({ section }) => {
  const location = useLocation();

  useEffect(() => {
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'auto' });
      }
    }
  }, [location, section]);

  const project1Images = [
    "/images/project1-1.jpg",
    "/images/project1-2.jpg",
    "/images/project1-3.jpg",
    "/images/project1-4.jpg",
    "/images/project1-5.jpg",
    "/images/project1-6.jpg",
    "/images/project1-7.jpg",
    "/images/project1-8.jpg"
  ];

  const project2Images = [
    "/images/project2-1.jpg"
  ];

  return (
      <div>
        {/* Hero Section */}
        <Element name="home">
          <div className="hero-section text-white text-center">
            <Container fluid>
              <h1 className="display-4">Welcome to My Portfolio</h1>
              <p className="lead">Showcasing my projects and skills</p>
              <ScrollLink to="projects" smooth={true} duration={500}>
                <Button variant="primary">See My Work</Button>
              </ScrollLink>
            </Container>
          </div>
        </Element>

        {/* About Section */}
        <Element name="about" id="about">
          <Container fluid className="about-section">
            <h2 className="text-center section-title"><FontAwesomeIcon icon={faUser} /> ABOUT ME</h2>
            <hr className="section-divider" />
            <Row className="justify-content-center">
              <Col md={3} className="text-center about-item">
                <FontAwesomeIcon icon={faUser} size="2x" className="mb-2" />
                <h5 className="about-item-title">이름</h5>
                <p className="about-item-text">이동현</p>
              </Col>
              <Col md={3} className="text-center about-item">
                <FontAwesomeIcon icon={faCalendar} size="2x" className="mb-2" />
                <h5 className="about-item-title">생년월일</h5>
                <p className="about-item-text">1994.04.30</p>
              </Col>
              <Col md={3} className="text-center about-item">
                <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" className="mb-2" />
                <h5 className="about-item-title">주소지</h5>
                <p className="about-item-text">인천광역시 부평구</p>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col md={3} className="text-center about-item">
                <FontAwesomeIcon icon={faPhone} size="2x" className="mb-2" />
                <h5 className="about-item-title">연락처</h5>
                <p className="about-item-text">010-9282-7263</p>
              </Col>
              <Col md={3} className="text-center about-item">
                <FontAwesomeIcon icon={faEnvelope} size="2x" className="mb-2" />
                <h5 className="about-item-title">이메일</h5>
                <p className="about-item-text">lhidns.dev@gmail.com</p>
              </Col>
              <Col md={3} className="text-center about-item">
                <FontAwesomeIcon icon={faGraduationCap} size="2x" className="mb-2" />
                <h5 className="about-item-title">학력</h5>
                <p className="about-item-text">유한대학교<br />(컴퓨터소프트웨어과)</p>
              </Col>
            </Row>
          </Container>
        </Element>

        {/* Skills Section */}
        <Element name="skills" id="skills">
          <Container fluid className="skills-section">
            <h2 className="text-center section-title"><FontAwesomeIcon icon={faTools} /> SKILLS</h2>
            <hr className="section-divider" />
            <Row className="skills-row">
              <Col md={3} className="skills-category">
                <h3><FontAwesomeIcon icon={faServer} /> Backend</h3>
                <div className="skills-content">
                  <span>• Java</span>
                  <span>• Node.js</span>
                  <span>• JSP</span>
                  <span>• Oracle</span>
                  <span>• MySQL</span>
                </div>
              </Col>
              <Col md={3} className="skills-category">
                <h3><FontAwesomeIcon icon={faCode} /> Frontend</h3>
                <div className="skills-content">
                  <span>• JavaScript</span>
                  <span>• HTML5</span>
                  <span>• React</span>
                  <span>• Vue</span>
                  <span>• jQuery</span>
                  <span>• BootStrap</span>
                </div>
              </Col>
              <Col md={3} className="skills-category">
                <h3><FontAwesomeIcon icon={faTools} /> Infra</h3>
                <div className="skills-content">
                  <span>• Linux</span>
                  <span>• AWS (RDS, EC2 등)</span>
                  <span>• Docker</span>
                </div>
              </Col>
              <Col md={3} className="skills-category">
                <h3><FontAwesomeIcon icon={faDesktop} /> Tools</h3>
                <div className="skills-content">
                  <span>• Git</span>
                  <span>• GitHub</span>
                  <span>• IntelliJ</span>
                  <span>• Redmine</span>
                </div>
              </Col>
            </Row>
          </Container>
        </Element>

        {/* Projects Section */}
        <Element name="projects" id="projects">
          <Container fluid className="projects-section">
            <h2 className="text-center section-title"><FontAwesomeIcon icon={faBriefcase} /> MY PROJECTS</h2>
            <hr className="section-divider" />
            <Row>
              <Col md={6} className="my-3">
                <div className="project-card p-3 bg-light rounded">
                  <ProjectCarousel images={project1Images} />
                  <h3>손비서 모바일앱 - ConfigManager 서비스</h3>
                  <p>손비서 모바일 애플리케이션은 AI비서가 전화를 대신 받아주고, 응대하며, 부재중 전화도 읽어주고, 통화녹음과 전화 내용 기록 기능을 제공합니다.</p>
                  <LinkContainer to="/projects/1">
                    <Button variant="secondary">View Project</Button>
                  </LinkContainer>
                </div>
              </Col>
              <Col md={6} className="my-3">
                <div className="project-card p-3 bg-light rounded">
                  <ProjectCarousel images={project2Images} />
                  <h3>외부 고객사 전산시스템 연동 (External-Communicator)</h3>
                  <p>외부 고객사의 전산에 데이터를 등록, 조회 및 수정하는 역할을 수행하며, AI 비서가 필요 정보를 취합하여 고객사의 전산에 등록하는 시스템입니다.</p>
                  <LinkContainer to="/projects/2">
                    <Button variant="secondary">View Project</Button>
                  </LinkContainer>
                </div>
              </Col>
            </Row>
          </Container>
        </Element>

        {/* Contact Section */}
        <Element name="contact" id="contact">
          <Container fluid className="contact-section">
            <h2 className="text-center section-title"><FontAwesomeIcon icon={faEnvelopeOpenText} /> CONTACT ME</h2>
            <hr className="section-divider" />
            <Row className="justify-content-center">
              <Col md={6}>
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Your Name" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Your Email" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" rows={3} placeholder="Your Message"></textarea>
                  </div>
                  <Button variant="primary" type="submit">Send</Button>
                </form>
              </Col>
            </Row>
          </Container>
        </Element>

        {/* Footer Section */}
        <footer className="footer-section">
          <Container fluid>
            <Row>
              <Col className="text-center py-3">
                <p>© 2024 Lee Donghyeon. All Rights Reserved.</p>
              </Col>
            </Row>
          </Container>
        </footer>
      </div>
  );
};

export default Home;
