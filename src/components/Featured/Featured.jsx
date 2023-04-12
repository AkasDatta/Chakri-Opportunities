import React from 'react';
import Card from 'react-bootstrap/Card';
import './Featured.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Featured = ({feature}) => {
    const{id, company_logo, job_title, company_name, remote_or_onsite, location, fulltime_or_parttime, salary} = feature;
    // console.log(feature)
    return (
        <div>
            <Card className='featured-card m-2 p-4'>
                <Card.Img className='card-img ms-3 fluid' variant="top" src={company_logo}/>
                <Card.Body>
                    <Card.Title>{job_title}</Card.Title>
                    <p>{company_name}</p>
                    <Card.Text>
                        <button className='btn btn-outline-success m-2'>{remote_or_onsite}</button>
                        <button  className='btn btn-outline-success'>{fulltime_or_parttime}</button>
                    </Card.Text>
                    <Card.Text className='d-flex'>   
                        <p className='me-4'><FontAwesomeIcon className='me-2' icon={faLocationDot}/>{location} </p>
                        <p>{salary}</p>
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



// import React, { useContext } from 'react';
// import Card from 'react-bootstrap/Card';
// import { FeaturedJobContext } from '../../App';

// const Featured = ({feature}) => {
//     const angti = useContext(FeaturedJobContext);
//     const{id, company_logo, job_title, company_name, remote_or_onsite, location, fulltime_or_parttime, salary} = feature;
//     console.log(angti);
//     return (
//         <div>
//             <Card className='featured-card m-2'>
//                 <Card.Img variant="top" src={company_logo} />
//                 <Card.Body>
//                     <Card.Title>Akas Datta {feature.length}</Card.Title>
//                     <Card.Text> {id} {location}
//                     Akas Datta is a software engineer with over 10 years of experience in building web and mobile applications. He has worked with a variety of programming languages and frameworks, including React, Angular, Node.js, and Ruby on Rails.
//                     </Card.Text>
//                 </Card.Body>
//             </Card>
//         </div>
//     );
// };

// export default Featured;