import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import myImage from './image/job-women.jpg';
import './Home.css';
import { useLoaderData } from 'react-router-dom';
import Featured from '../Featured/Featured';
import Category from '../Category/Category';


const Home = () => {
    const features = useLoaderData();

    const [categoryList, setCategoryList] = useState([]);
    useEffect(() => {
        fetch('/category.json')
        .then(res => res.json())
        .then(data => setCategoryList(data))
    }, [])

    const [showAll, setShowAll] = useState(false);
    const handleShowAll = () =>{
        setShowAll(true);
    };

    return (
        <div>
            <div className='m-4'>
                <Container>
                    <Row>
                        <Col md={6}>
                        <h1 className='mt-3'>One Step <br /> Closer To Your <br /><span>Dream Job</span></h1>
                        <div>
                        <p className='py-2'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        </div>
                        
                        <Button className="p-4 py-3 mb-4 fw-bold started">Get Started</Button>
                        </Col>
                        <Col md={6}>
                        <Image className='rounded' src={myImage} fluid />
                        </Col>
                    </Row>
                </Container>
            </div>

            <div>
                <div className='bg-white container mb-5 ps-3'>
                        <h2 className='fs-1 pt-5 text-center'>Job Category List</h2>
                       <div>
                            <p className='text-center p-2'>Explore thousands of job opportunities with all the information you need. Its your future.</p>
                       </div>
                    <div className="category-container pb-5">
                        {
                            categoryList.map(category => <Category
                                key={category.id}
                                category ={category}
                            ></Category>)
                        }
                    </div>
                </div>
            </div>
            
            <div>
                <div className='bg-white container mb-5'>
                        <h2 className='fs-1 pt-5 text-center'>Featured Jobs</h2>
                       <div>
                            <p className='text-center p-2'>Explore thousands of job opportunities with all the information you need. Its your future.</p>
                       </div>
                    <div className="featured-container">
                        {
                            features?.slice(0, showAll? 6 : 4).map(feature => <Featured
                                key={feature.id}
                                feature ={feature}
                                // features = {features}
                            ></Featured>)
                        }
                    </div>
                   <div className='text-center'>
                      {
                        !showAll && (<Button onClick={handleShowAll} className="p-4 py-3 mb-4 fw-bold seeAll">See All Jobs</Button>)
                      }
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Home;