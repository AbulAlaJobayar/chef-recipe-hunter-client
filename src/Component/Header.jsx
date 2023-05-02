import React, { useContext } from 'react';
import { Button, Container, Form, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {
    const {user}=useContext(AuthContext)
    console.log(user)
    return (
        <Container>
            <Navbar bg="light" expand="lg" className='px-4'>
                <Navbar.Brand href="/" className='fst-italic fs-3 text-warning fw-bold'>Damn Delicious</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mx-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#action2">Blog</Nav.Link>
                    </Nav>
                    {
                        user?<>
                        <img src={user.photoURL} alt="" style={{width:'50px',height:'50px' ,borderRadius:'50%',cursor:'pointer'}}  title={user.displayName}/>
                        
                    </>:<><Button variant="secondary">Login</Button></>
                    }
                    
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Header;