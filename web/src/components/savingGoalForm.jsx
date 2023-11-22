import React, { useState, useEffect } from 'react';
import { createSavingsGoal, updateSavingsGoal, deleteSavingsGoal } from '../services/api-service';

const SavingGoalForm = ({ savingsGoal, onCreateSavingsGoal, onUpdateSavingsGoal, onDeleteSavingsGoal }) => {
  const [savingGoalData, setSavingGoalData] = useState({
    name: '',
    targetAmount: '',
    deadline: '',
    description: '',
  });

  useEffect(() => {
    if (savingsGoal) {
      setSavingGoalData({
        name: savingsGoal.name,
        targetAmount: savingsGoal.targetAmount,
        deadline: savingsGoal.deadline,
        description: savingsGoal.description,
      });
    }
  }, [savingsGoal]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (savingsGoal) {
        const updatedSavingsGoal = await updateSavingsGoal(savingsGoal.id, savingGoalData);
        onUpdateSavingsGoal(updatedSavingsGoal);
        console.log('Savings goal updated:', updatedSavingsGoal);
      } else {
        const newSavingsGoal = await createSavingsGoal(savingGoalData);
        onCreateSavingsGoal(newSavingsGoal.goal);
        console.log('Savings goal created:', newSavingsGoal.goal);
      }

      setSavingGoalData({
        name: '',
        targetAmount: '',
        deadline: '',
        description: '',
      });

      
    } catch (error) {
      console.error('Error handling form submission:', error.message);
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
          onChange={(event) => setSavingGoalData({ ...savingGoalData, name: event.target.value })}
          required
        />
      </label>

      <label>
        Cantidad a Ahorrar:
        <input
          type="number"
          name="targetAmount"
          value={savingGoalData.targetAmount}
          onChange={(event) => setSavingGoalData({ ...savingGoalData, targetAmount: event.target.value })}
          required
        />
      </label>

      <label>
        Fecha Límite:
        <input
          type="date"
          name="deadline"
          value={savingGoalData.deadline}
          onChange={(event) => setSavingGoalData({ ...savingGoalData, deadline: event.target.value })}
          required
        />
      </label>

      <label>
        Descripción:
        <textarea
          name="description"
          value={savingGoalData.description}
          onChange={(event) => setSavingGoalData({ ...savingGoalData, description: event.target.value })}
        />
      </label>

      <button type="submit">{savingsGoal ? 'Update' : 'Create'} Savings Goal</button>
      {savingsGoal && (
        <button type="button" onClick={() => onDeleteSavingsGoal(savingsGoal.id)}>
          Delete Savings Goal
        </button>
      )}
    </form>
  );
};

export default SavingGoalForm;
