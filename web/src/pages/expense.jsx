// ExpensePage.js
import React from 'react';
import ExpenseForm from '../components/expenseForm';
import ExpenseList from '../components/expenseList';

const ExpensePage = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title mb-4">Registrar Nuevo Gasto</h2>
              <ExpenseForm />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title mb-4">Lista de Gastos</h2>
              <ExpenseList />
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12">
          <div className="jumbotron">
            <h1 className="display-4">¡Controla tus gastos de manera eficiente!</h1>
            <p className="lead">
              Registra tus gastos diarios y mantén un seguimiento detallado de tus finanzas
            </p>
            <hr className="my-4" />
            <p>Descubre cómo puedes ahorrar más y gastar de manera consciente.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpensePage;
