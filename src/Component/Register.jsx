import React, {  useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link} from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { FaGoogle,FaGithub } from "react-icons/fa";
const Register = () => {
const {createUser,singInWithGoogle,singInWithGithub} = useContext(AuthContext)
  const [error,setError]=useState('');

const handleRegister=(event)=>{
  event.preventDefault();
  setError('');
  const form= event.target;
  const name= form.name.value;
  const Photo=form.photo.value;
  const email= form.email.value;
  const password= form.password.value;
  form.reset();
  console.log(name,Photo,email,password)
  if(!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/){
    setError( 'password Minimum eight characters, at least one letter and one number');
    return
  }
  createUser(email,password)
  .then(result=>{
    const loggeduser=result.user;
    console.log(loggeduser);
    
  })
  .catch(err=>{
    console.log(err.massage);
    setError(err.message);
  })
}
    
const handleGoogleSingin=()=>{
  singInWithGoogle()
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
  }).catch((error) => {
    
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}

const handleGithubSingin=()=>{
  singInWithGithub()
  .then((result) => {
   
    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GithubAuthProvider.credentialFromError(error);
    // ...
  });
}



  return (

    <Container className='w-25 mx-auto mt-5'>
      <h3 className='text-center'>Please Register</h3>
      <Container></Container>
      <Form className=' mt-5' onSubmit={handleRegister}>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter your name" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control type='text' name='photo' placeholder="photo url" required />

        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" required />

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox"
            name='accept'
            label="Accept terms and condition" />
        </Form.Group>
        <Button
          variant="primary" type="submit">
          Register
        </Button>
        <br />

        <Form.Text className="text-secondary">
          Already have an account? <Link to='/login'> Login</Link>
        </Form.Text>
        <Form.Text className="text-success">
<p><small className='text-danger'>{error}</small></p>
        </Form.Text>
        <Form.Text className="text-danger">

        </Form.Text>
      </Form>
      <div className='d-flex gap-1'>
      <Button variant="success" className='mt-2' onClick={handleGoogleSingin}><FaGoogle></FaGoogle> sing in with google</Button>
      <Button variant="secondary" className='mt-2' onClick={handleGithubSingin}><FaGithub></FaGithub> sing in with github</Button>
      </div>
    </Container>
  );
};

export default Register;