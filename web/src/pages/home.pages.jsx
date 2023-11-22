import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container-fluid h-100 d-flex flex-column">
      <header className="text-center p-5">
        <h1 className="display-4">Bienvenido a tu Aplicación de Ahorro</h1>
        <p className="lead">Empieza a administrar y ahorrar tu dinero de manera inteligente.</p>
      </header>

      <section className="p-5">
        <h2>Funcionalidades Principales</h2>
        <ul className="list-group">
          <li className="list-group-item">Registro de Gastos</li>
          <li className="list-group-item">Seguimiento de Ingresos</li>
          <li className="list-group-item">Estadísticas y Reportes</li>
        </ul>
      </section>

      <section className="p-5">
        <h2>Comienza Ahora</h2>
        <p>
          Registra tus gastos e ingresos para obtener un control total sobre tu dinero.
        </p>
        <Link to="/signup" className="btn btn-primary">Registrate</Link>
      </section>

      
      <footer className="mt-auto text-center p-3">
        <p>&copy; 2023 Tu Aplicación de Ahorro. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Home;
