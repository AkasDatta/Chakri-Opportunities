import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import myImage from './image/job-women.jpg';
import './Home.css'
import Category from '../Category/Category';
import { useLoaderData } from 'react-router-dom';


const Home = () => {
    const categorys = useLoaderData();

    return (
        <div>
            <div className='m-4'>
                <Container>
                    <Row>
                        <Col md={6}>
                        <h1 className='mt-3'>One Step <br /> Closer To Your <br /><span>Dream Job</span></h1>
                        <p className='py-2'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <Button className="p-4 py-3 mb-4 fw-bold started">Get Started</Button>
                        </Col>
                        <Col md={6}>
                        <Image className='rounded' src={myImage} fluid />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
                <div className='bg-white container mb-5'>
                        <h2 className='fs-1 pt-5 text-center'>Job Category List</h2>
                        <p className='text-center p-2'>Explore thousands of job opportunities with all the information you need. Its your future.</p>
                    <div className="category-container">
                        {
                            categorys.map(category => <Category
                                key={category.id}
                                category ={category}
                            ></Category>)
                        }
                    </div>
                </div>
            </div>
            
        </div>
      
    );
};

export default Home;