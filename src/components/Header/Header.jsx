import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import './Header.css'

const Header = () => {
    return (
        <div className='container mt-4 fw-bold'>
        <Navbar expand="lg">
            <Navbar.Brand className='fw-bold' href="/">Chakri-Opportunities</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                <Nav.Link className='link-color' as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/">Statistics</Nav.Link>
                <Nav.Link as={Link} to="/">Applied Jobs</Nav.Link>
                <Nav.Link as={Link} to="/contact">Blog</Nav.Link>
                </Nav>
                <Form inline>
                <Button className="p-4 py-3">Start Applying</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
        </div>
    );
};

export default Header;