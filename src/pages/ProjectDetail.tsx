import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

const ProjectDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    const projectData = {
        title: `Project ${id}`,
        description: `This is a detailed description of Project ${id}.`,
        link: '#',
        imageUrl: '/images/project-placeholder.png',
    };

    return (
        <Container className="py-5">
            <Row>
                <Col md={6}>
                    <img src={projectData.imageUrl} alt={projectData.title} className="img-fluid" />
                </Col>
                <Col md={6}>
                    <h2>{projectData.title}</h2>
                    <p>{projectData.description}</p>
                    <Button variant="primary" href={projectData.link}>View Project</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default ProjectDetail;
