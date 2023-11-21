import React, { useState } from 'react';
import ExpenseForm from '../components/expenseForm';
import ExpenseList from '../components/expenseList';
import ExpenseItem from '../components/expenseItem'; // Importa ExpenseItem

const ExpensePage = () => {
  const [expenseToEdit, setExpenseToEdit] = useState(null);

  const handleExpenseSubmit = (expenseData) => {
    // Lógica para manejar la sumisión de un gasto
    // Puedes enviar los datos a tu servicio/API aquí

    // En este ejemplo, simplemente imprimimos los datos en la consola
    console.log('Expense submitted:', expenseData);

    // Limpiamos la variable expenseToEdit
    setExpenseToEdit(null);
  };

  const handleExpenseEdit = (expense) => {
    // Manejar la edición de un gasto
    // Puedes establecer el gasto a editar en el estado
    setExpenseToEdit(expense);
  };

  const handleExpenseDelete = (expenseId) => {
    // Lógica para manejar la eliminación de un gasto
    // Puedes enviar la solicitud de eliminación a tu servicio/API aquí

    // En este ejemplo, simplemente imprimimos el ID en la consola
    console.log('Expense deleted:', expenseId);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title mb-4">{expenseToEdit ? 'Editar Gasto' : 'Registrar Nuevo Gasto'}</h2>
              <ExpenseForm onSubmit={handleExpenseSubmit} expenseToEdit={expenseToEdit} />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title mb-4">Lista de Gastos</h2>
              <ExpenseList
                onEdit={handleExpenseEdit}
                onDelete={handleExpenseDelete}
                renderItem={(expense) => (
                  <ExpenseItem key={expense._id} expense={expense} onEdit={handleExpenseEdit} onDelete={handleExpenseDelete} />
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpensePage;
