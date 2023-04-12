import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { addToDb } from '../utilities/fakedb';
import { toast } from 'react-hot-toast';
import { Card, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faEnvelope, faFilm, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import './jobDetails.css'

const JobDetails = () => {
    const { id } = useParams();
    const [featuredJobs, setFeaturedJobs] = useState([]);
    useEffect(() => {
      fetch('/jobDetails.json')
      .then(res => res.json())
      .then(data => setFeaturedJobs(data));
    },[])


    const [featuredJobData, setFeaturedJobData] = useState({});

    useEffect(() =>{
        const exists = featuredJobs.find(singleData => singleData.id == id);
        if(exists) {
            setFeaturedJobData(exists || {});
        }

    }, [featuredJobs]);

    const {job_description, job_responsibilities, educational_requirements, experiences, salary, job_title, phone, email, address} = featuredJobData;




    const handleToSetLocalStorage = (featuredJobData) => {
        addToDb(id);
        toast.success('SuccessFully Applied');
    }

        return (
          <div>
            <Row className='mx-5 mt-5'>
            <Col md={8}>
              <Card className='border-0  bg-light'>
                <Card.Body>
                  <Card.Title></Card.Title>
                  
                  <Card.Text>
                  <p><b>Job Description:</b> {job_description}</p>
                  <p><b>JobResponsibility: </b> {job_responsibilities}</p>
                    <b>Educational Requirments:</b><br />
                    <p>{educational_requirements}</p>
                   <b>Experience:</b> <br />
                   <p>{experiences}</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className='border-0'>
                <Card.Body>
                  <Card.Title> <b>Job Details</b> </Card.Title>
                  <hr />
                  <Card.Text>
                    <p><FontAwesomeIcon icon={faDollarSign} /> <b>Salary: </b>   {salary}</p>
                    <p> <FontAwesomeIcon icon={faFilm} /> <b>Job Title: </b> {job_title}</p>
                  </Card.Text>
                  <Card.Title> <b>Contact Information</b> </Card.Title>
                  <hr />
                  <Card.Text>
                    <p><FontAwesomeIcon icon={faPhone} /> <b>Phone: </b> {phone}</p>
                    <p> <FontAwesomeIcon icon={faEnvelope} /> <b>Email: </b> {email}</p>
                    <p> <FontAwesomeIcon icon={faLocationDot} /> <b>Address: </b> {address}</p>
                  </Card.Text>
                </Card.Body>
              </Card>
              <div className=' text-center px-5'>
              <button onClick={() => handleToSetLocalStorage(featuredJobData)} className='mt-3 applyBtn px-5 py-3 rounded text-light fw-bold border-0'>Apply Now</button>
              </div>
            </Col>
            </Row>
          </div>
        
        );
    };

export default JobDetails;



