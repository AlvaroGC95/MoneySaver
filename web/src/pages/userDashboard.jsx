import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../contexts/auth-context';

const UserDashboard = () => {
  const { user, onLogout } = useAuthContext();

  const handleLogout = () => {
    // Lógica para cerrar sesión, por ejemplo, limpiar el token, etc.
    // Asume que `onLogout` manejará la lógica de cerrar sesión en el contexto.
    onLogout();
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h2>Bienvenido, {user.username}!</h2>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <h4>Tu panel de control</h4>
          {/* Aquí puedes agregar componentes o enlaces a otras secciones de la aplicación */}
          <Link to="/expenses">
            <Button variant="primary">Ver Gastos</Button>
          </Link>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <Button variant="danger" onClick={handleLogout}>
            Cerrar Sesión
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default UserDashboard;
