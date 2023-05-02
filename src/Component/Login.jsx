import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
const {singIn}=useContext(AuthContext)

 const handleLogin=(event)=>{
  event.preventDefault();
  const form=event.target;
  const email=form.email.value;
  const password=form.password.value;
  if (email, password){
    singIn(email, password)
    .then(result=>{
      const singInUser=result.user;
      
    })
    .catch(err=>{
      console.log(err.message)
    })
  }
  
 }
    return (
        <Container className='w-25 mx-auto mt-5'>
      <h3 className='text-center'>Please login</h3>
      <Form className=' mt-5' onSubmit={handleLogin} >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" required />

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <br />

        <Form.Text className="text-secondary">
          Don't have an account? <Link to='/register'> Register</Link>
        </Form.Text>
        <Form.Text className="text-success">

        </Form.Text>
        <Form.Text className="text-danger">

        </Form.Text>
      </Form>
    </Container>
    );
};

export default Login;