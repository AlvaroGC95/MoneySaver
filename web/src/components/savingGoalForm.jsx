import React, { useState } from 'react';

const SavingGoalForm = ({ onCreateSavingsGoal }) => {
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Envia la meta de ahorro al servidor
      const response = await fetch('/savings-goals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(savingGoalData),
      });

      if (response.ok) {
        // Maneja la respuesta del servidor, por ejemplo, actualizando el estado o redirigiendo
        const newSavingsGoal = await response.json();
        onCreateSavingsGoal(newSavingsGoal.goal);
        console.log('Meta de ahorro creada:', newSavingsGoal.goal);
        // Limpia el formulario
        setSavingGoalData({
          name: '',
          targetAmount: '',
          deadline: '',
          description: '',
        });
      } else {
        console.error('Error al crear la meta de ahorro');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
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
