import React from 'react';
import Card from 'react-bootstrap/Card';

const Featured = ({feature}) => {
    const{id, company_logo, job_title, company_name, remote_or_onsite, location, fulltime_or_parttime, salary} = feature;
    return (
        <div>
            <Card className='featured-card m-2'>
                <Card.Img variant="top" src={company_logo} />
                <Card.Body>
                    <Card.Title>Akas Datta</Card.Title>
                    <Card.Text>
                    Akas Datta is a software engineer with over 10 years of experience in building web and mobile applications. He has worked with a variety of programming languages and frameworks, including React, Angular, Node.js, and Ruby on Rails.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Featured;