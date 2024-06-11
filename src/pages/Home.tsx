import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendar, faMapMarkerAlt, faPhone, faEnvelope, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section text-white text-center" id="home">
        <Container fluid>
          <h1 className="display-4">Welcome to My Portfolio</h1>
          <p className="lead">Showcasing my projects and skills</p>
          <Link to="projects" smooth={true} duration={500}>
            <Button variant="primary">See My Work</Button>
          </Link>
        </Container>
      </div>

      {/* About Section */}
      <Container fluid className="about-section" id="about">
        <h2 className="text-center section-title">ABOUT ME</h2>
        <hr className="section-divider" />
        <Row className="justify-content-center">
          <Col md={2} className="text-center about-item">
            <FontAwesomeIcon icon={faUser} size="2x" className="mb-2" />
            <h5 className="about-item-title">이름</h5>
            <p className="about-item-text">이동현</p>
          </Col>
          <Col md={2} className="text-center about-item">
            <FontAwesomeIcon icon={faCalendar} size="2x" className="mb-2" />
            <h5 className="about-item-title">생년월일</h5>
            <p className="about-item-text">94.04.30</p>
          </Col>
          <Col md={2} className="text-center about-item">
            <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" className="mb-2" />
            <h5 className="about-item-title">주소지</h5>
            <p className="about-item-text">인천광역시 부평구</p>
          </Col>
          <Col md={2} className="text-center about-item">
            <FontAwesomeIcon icon={faPhone} size="2x" className="mb-2" />
            <h5 className="about-item-title">연락처</h5>
            <p className="about-item-text">010-9282-7263</p>
          </Col>
          <Col md={2} className="text-center about-item">
            <FontAwesomeIcon icon={faEnvelope} size="2x" className="mb-2" />
            <h5 className="about-item-title">이메일</h5>
            <p className="about-item-text">lhidns.dev@gmail.com</p>
          </Col>
          <Col md={2} className="text-center about-item">
            <FontAwesomeIcon icon={faGraduationCap} size="2x" className="mb-2" />
            <h5 className="about-item-title">학력</h5>
            <p className="about-item-text">유한대학교<br /> (컴퓨터소프트웨어과)</p>
          </Col>
        </Row>
      </Container>

      {/* Skills Section */}
      <Container fluid className="skills-section" id="skills">
        <h2 className="text-center section-title">Skills</h2>
        <hr className="section-divider" />
        <Row>
          <Col md={4} className="my-3">
            <div className="skill-card p-3 bg-light rounded">
              <h3>JavaScript</h3>
              <p>Experience with ES6+, TypeScript, and modern JavaScript frameworks.</p>
            </div>
          </Col>
          <Col md={4} className="my-3">
            <div className="skill-card p-3 bg-light rounded">
              <h3>React</h3>
              <p>Proficient in building single-page applications with React and Redux.</p>
            </div>
          </Col>
          <Col md={4} className="my-3">
            <div className="skill-card p-3 bg-light rounded">
              <h3>Node.js</h3>
              <p>Experienced in building server-side applications with Node.js and Express.</p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Projects Section */}
      <Container fluid className="projects-section" id="projects">
        <h2 className="text-center section-title">My Projects</h2>
        <hr className="section-divider" />
        <Row>
          <Col md={4} className="my-3">
            <div className="project-card p-3 bg-light rounded">
              <h3>Project One</h3>
              <p>준비중</p>
              <Button variant="secondary" href="#">View Project</Button>
            </div>
          </Col>
          <Col md={4} className="my-3">
            <div className="project-card p-3 bg-light rounded">
              <h3>Project Two</h3>
              <p>준비중</p>
              <Button variant="secondary" href="#">View Project</Button>
            </div>
          </Col>
          <Col md={4} className="my-3">
            <div className="project-card p-3 bg-light rounded">
              <h3>Project Three</h3>
              <p>준비중</p>
              <Button variant="secondary" href="#">View Project</Button>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Contact Section */}
      <Container fluid className="contact-section" id="contact">
        <h2 className="text-center section-title">Contact Me</h2>
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
    </div>
  );
};

export default Home;
