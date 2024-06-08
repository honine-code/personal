import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className="hero-section text-white text-center">
                <Container>
                    <h1 className="display-4">Welcome to My Portfolio</h1>
                    <p className="lead">Showcasing my projects and skills</p>
                    <Button variant="primary" href="#projects">See My Work</Button>
                </Container>
            </div>

            {/* About Section */}
            <Container className="about-section py-5">
                <Row>
                    <Col md={6}>
                        <h2>About Me</h2>
                        <p>
                            저는 풀스택 개발을 목표로 하고 있는 5년차 개발자 이동현 입니다. 환영합니다.
                        </p>
                    </Col>
                    <Col md={6}>
                        {/*<img src="/images/profile.jpg" alt="Profile" className="img-fluid rounded-circle" />*/}
                    </Col>
                </Row>
            </Container>

            {/* Projects Section */}
            <Container className="projects-section py-5" id="projects">
                <h2 className="text-center">My Projects</h2>
                <Row>
                    <Col md={4} className="my-3">
                        <div className="project-card p-3 bg-light rounded">
                            <h3>Project One</h3>
                            <p>준비중</p>
                            <Link to="/projects/1">
                                <Button variant="secondary">View Project</Button>
                            </Link>
                        </div>
                    </Col>
                    <Col md={4} className="my-3">
                        <div className="project-card p-3 bg-light rounded">
                            <h3>Project Two</h3>
                            <p>준비중</p>
                            <Link to="/projects/2">
                                <Button variant="secondary">View Project</Button>
                            </Link>
                        </div>
                    </Col>
                    <Col md={4} className="my-3">
                        <div className="project-card p-3 bg-light rounded">
                            <h3>Project Three</h3>
                            <p>준비중</p>
                            <Link to="/projects/3">
                                <Button variant="secondary">View Project</Button>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;