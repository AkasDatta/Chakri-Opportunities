import React from 'react';
import './Category.css';
import { Card } from 'react-bootstrap';

const Category = ({category}) => {
    const{logo, name, jobs} = category;
    return (
        <div className='card-group'>
            <div className="row g-2">
                <div className="col">
                    <Card className="h-100 box">
                        <img src={logo} alt="" />
                        {/* <Card.Img variant="top" className=' rounded mx-auto d-block w-25 h-25 m-3' src={logo} alt="..." fluid/> */}
                        <Card.Body className='body'>
                           <h5>{name}</h5>
                           <p>{jobs}</p>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Category;