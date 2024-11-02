import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { createUser } from '../service/api';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      // Call signup API and handle response
      const res = await createUser({
        username: username,
        password: password,
        email: email,
      });

      // Redirect based on backend response
      if (res.data.redirectTo) {
        window.location.href = res.data.redirectTo;
      }
    } catch (err) {
      console.error("Signup error:", err);
    } finally {
      setUsername('');
      setPassword('');
      setEmail('');
    }
  };

  return (
    <Container className='col-4'>
      <br />
      <br />
      <br />
      <Card>
        <Card.Body>
          <Card.Title>Signup</Card.Title>
          <Form onSubmit={handleSignup}>
            <Form.Group controlId='formBasicUsername'>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <br />
            <br />
            <Button variant='primary' type='submit'>
              Signup{' '}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SignupPage;
