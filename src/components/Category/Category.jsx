import React from 'react';
import './Category.css';
import { Card } from 'react-bootstrap';

const Category = () => {
    return (
        <div>
        <div className='bg-white container mb-5'>
            <h2 className='fs-1 pt-5 text-center'>Job Category List</h2>
            <p className='text-center p-2'>Explore thousands of job opportunities with all the information you need. Its your future.</p>

            <div className="row row-cols-1 row-cols-md-4 g-4">
                <div className="col">
                    <Card className="h-100 box">
                        <Card.Img variant="top" src="..." alt="..." />
                        <Card.Body>
                           <h4>markting b thuis</h4>
                           <p>absoluite</p>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col">
                    <Card className="h-100 box">
                        <Card.Img variant="top" src="..." alt="..." />
                        <Card.Body>
                           <h4>markting and thuis</h4>
                           <p>absoluite</p>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col">
                    <Card className="h-100 box">
                        <Card.Img variant="top" src="..." alt="..." />
                        <Card.Body>
                           <h4>markting and thuis</h4>
                           <p>absoluite</p>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col">
                    <Card className="h-100 box">
                        <Card.Img variant="top" src="..." alt="..." />
                        <Card.Body>
                           <h4>markting and thuis</h4>
                           <p>absoluite</p>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Category;