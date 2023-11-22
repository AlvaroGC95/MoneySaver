// IncomeList.jsx
import React from 'react';

const IncomeList = ({ incomes }) => {
  return (
    <div>
      <h2>Listado de Ingresos</h2>
      <ul>
        {incomes.map((income) => (
          <li key={income.id}>
            Descripción: {income.description}, Monto: {income.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IncomeList;
