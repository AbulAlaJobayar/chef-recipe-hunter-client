import React from 'react';
import { Button, Container, Form, Nav, NavDropdown, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Container>
            <Navbar bg="light" expand="lg" className='px-4'>
                <Navbar.Brand href="#" className='fst-italic fs-3 text-warning '>Damn Delicious</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mx-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Blog</Nav.Link>
                        <Nav.Link href="#" > Link </Nav.Link>
                    </Nav>
                    <span>
                        <img src="" alt="" />
                        <Button variant="secondary">Login</Button>
                    </span>
                    
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Header;