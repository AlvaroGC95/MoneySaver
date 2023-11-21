
import React from 'react';
import { Link } from 'react-router-dom';


const HomePage = () => {
  return (
    <div className="container mt-5">
      <header className="text-center">
        <h1>Bienvenido a tu Aplicación de Ahorro</h1>
        <p>Empieza a administrar y ahorrar tu dinero de manera inteligente.</p>
      </header>

      <section className="mt-5">
        <h2>Funcionalidades Principales</h2>
        <ul className="list-group">
          <li className="list-group-item">Registro de Gastos</li>
          <li className="list-group-item">Seguimiento de Ingresos</li>
          <li className="list-group-item">Estadísticas y Reportes</li>
          {/* Agrega más funcionalidades según tu aplicación */}
        </ul>
      </section>

      <section className="mt-5">
        <h2>Comienza Ahora</h2>
        <p>
          Registra tus gastos e ingresos para obtener un control total sobre tu dinero.
        </p>
        <Link to="/expenses" className="btn btn-primary">Ver Gastos</Link>
      </section>

      {/* Otras secciones con estilos de Bootstrap */}
      
      <footer className="mt-5 text-center">
        <p>&copy; 2023 Tu Aplicación de Ahorro. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default HomePage;
