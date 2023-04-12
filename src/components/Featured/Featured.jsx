import React from 'react';
import Card from 'react-bootstrap/Card';
import './Featured.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Featured = ({feature}) => {
    const{id, company_logo, job_title, company_name, remote_or_onsite, location, fulltime_or_parttime, salary} = feature;
    return (
        <div>
            <Card className='featured-card m-2 p-4'>
                <Card.Img className='card-img ms-3 fluid' variant="top" src={company_logo}/>
                <Card.Body>
                    <Card.Title>{job_title}</Card.Title>
                    <div>
                        <p>{company_name}</p>
                    </div>
                    <Card.Text>
                        <button className='btn btn-outline-success m-2'>{remote_or_onsite}</button>
                        <button  className='btn btn-outline-success'>{fulltime_or_parttime}</button>
                    </Card.Text>
                    
                    <Card.Text className='d-flex me-4' ><FontAwesomeIcon className='me-2' icon={faLocationDot}/>{location}  {salary}
                    </Card.Text>
                    <div>
                        <Link to= {`../JobDetails/${id}`}>
                            <button className='details p-3 py-2 mb-4 fw-bold rounded text-light'>View Details</button>
                        </Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Featured;
