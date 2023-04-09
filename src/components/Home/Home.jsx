import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import myImage from './image/job-women.jpg';
import './Home.css'

const Home = () => {
    return (
        <div className='mt-4'>
            <Container>
                <Row>
                    <Col md={6}>
                    <h1>One Step <br /> Closer To Your <br /><span>Dream Job</span></h1>
                    <p className='py-2'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <Button className="p-4 py-3 fw-bold started">Get Started</Button>
                    </Col>
                    <Col md={6}>
                    <Image className='rounded' src={myImage} fluid />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;