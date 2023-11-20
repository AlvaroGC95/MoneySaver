import React, { useState } from 'react';

const SavingGoalForm = () => {
  const [savingGoalData, setSavingGoalData] = useState({
    name: '',
    targetAmount: '',
    deadline: '',
    description: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSavingGoalData({
      ...savingGoalData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Datos del formulario:', savingGoalData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre de la Meta:
        <input
          type="text"
          name="name"
          value={savingGoalData.name}
          onChange={handleInputChange}
          required
        />
      </label>

      <label>
        Cantidad a Ahorrar:
        <input
          type="number"
          name="targetAmount"
          value={savingGoalData.targetAmount}
          onChange={handleInputChange}
          required
        />
      </label>

      <label>
        Fecha Límite:
        <input
          type="date"
          name="deadline"
          value={savingGoalData.deadline}
          onChange={handleInputChange}
          required
        />
      </label>

      <label>
        Descripción:
        <textarea
          name="description"
          value={savingGoalData.description}
          onChange={handleInputChange}
        />
      </label>

      <button type="submit">Crear Meta de Ahorro</button>
    </form>
  );
};

export default SavingGoalForm;
