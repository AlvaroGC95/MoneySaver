import React, { useState, useEffect } from 'react';
import { getExpensesByCategory } from '../services/api-service';

const ExpenseList = ({ category }) => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await getExpensesByCategory(category);
        setExpenses(response.data.expenses || []);
      } catch (error) {
        console.error('Error fetching expenses:', error);
      }
    };

    fetchExpenses();
  }, [category]);

  return (
    <div>
      <h2>Lista de Gastos en la Categoría: {category}</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense._id}>
            {expense.description} - ${expense.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
