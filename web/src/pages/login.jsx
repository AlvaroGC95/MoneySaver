import { useState, useEffect } from 'react';
import { login, getUserProfile } from "../services/api-service";
import { useAuthContext } from "../contexts/auth-context";
import {  useNavigate } from "react-router-dom";
import { Card, Form, Button, Alert } from 'react-bootstrap';
import "./css/login.css"

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { user, onLogin } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    console.log('useEffect - user:', user);
    if (user) {
      navigate('/profile');
    }
  }, [user, navigate]);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    login({ email, password })
      .then(response => {
        if (response.userId) {
          getUserProfile().then(userData => {
            onLogin(userData);
            navigate('/profile');
          }).catch(error => {
            console.error('getUserProfile - Error obteniendo detalles del usuario:', error);
            setError('No se pudieron obtener los detalles del usuario.');
          });
        } else {
          setError('Inicio de sesión exitoso, pero no se recibió el ID del usuario.');
        }
      })
      .catch(error => {
        console.error('handleSubmit - Error en loginUser:', error);
        if (error.response && error.response.data && error.response.data.message) {
          setError(error.response.data.message);
        } else {
          setError('Error en el inicio de sesión. Por favor, verifica tus credenciales.');
        }
      });
  };
  
  return (
    <div className="min-h-screen d-flex align-items-center justify-content-center">
      <Card style={{ width: '24rem' }} className="p-4">
        <Card.Body>
          <h2 className="text-center mb-4">Sign in to your account</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="email-address">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                autoComplete="email"
                required
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                autoComplete="current-password"
                required
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="remember-me" >
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>

            <div className="d-flex justify-content-between align-items-center">
              <a href="#" className="text-sm text-indigo-600">Forgot your password?</a>
              <Button type="submit" variant="primary">
                Sign in
              </Button>
            </div>
          </Form>
          
          {error && <Alert variant="danger" className="mt-3">{error}</Alert>}

          <div className="text-center mt-3">
            <p>
              Not a member? <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Start a 14-day free trial</a>
            </p>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;