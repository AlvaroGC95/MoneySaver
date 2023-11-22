// IncomeForm.jsx
import React, { useState } from 'react';
import { createIncome } from '../services/api-service';

const IncomeForm = ({ onIncomeAdded }) => {
  const [incomeData, setIncomeData] = useState({
    description: '',
    amount: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setIncomeData({
      ...incomeData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const newIncome = await createIncome(incomeData);
      onIncomeAdded(newIncome);
      setIncomeData({
        description: '',
        amount: '',
      });
    } catch (error) {
      console.error('Error al agregar ingreso:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Descripción:
        <input
          type="text"
          name="description"
          value={incomeData.description}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Monto:
        <input
          type="number"
          name="amount"
          value={incomeData.amount}
          onChange={handleInputChange}
          required
        />
      </label>
      <button type="submit">Agregar Ingreso</button>
    </form>
  );
};

export default IncomeForm;
