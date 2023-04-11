import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import './Navigation.css'

const Navigation = () => {
    return (
        <div className='mt-4'>
            <div className='container'>
              <Navbar expand="lg">
                <Navbar.Brand className='fw-bold fs-2' href="/">Chakri-Opportunities</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto fw-bold">
                    <Nav.Link className='link-color' as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/chart">Statistics</Nav.Link>
                    <Nav.Link as={Link} to="/">Applied Jobs</Nav.Link>
                    <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                    </Nav>
                    <Form inline>
                    <Button className="p-4 py-3 fw-bold">Start Applying</Button>
                    </Form>
                </Navbar.Collapse>
              </Navbar>
            </div>
        </div>
    );
};

export default Navigation;