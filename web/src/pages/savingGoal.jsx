import React, { useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import SavingGoalForm from '../components/savingGoalForm';

const SavingGoalPage = () => {
  const [selectedSavingsGoal] = useState(null);
  const [error, setError] = useState('');

  const onCreateSavingsGoal = (newSavingsGoal) => {
    console.log('Nueva meta de ahorro creada:', newSavingsGoal);
  };

  const onUpdateSavingsGoal = (updatedSavingsGoal) => {
    console.log('Meta de ahorro actualizada:', updatedSavingsGoal);
  };

  const onDeleteSavingsGoal = (deletedSavingsGoal) => {
    console.log('Meta de ahorro eliminada:', deletedSavingsGoal);
  };

  return (
    <div className="min-h-screen d-flex align-items-center justify-content-center">
      <Card style={{ width: '24rem' }} className="p-4">
        <Card.Body>
          <h2 className="text-center mb-4">SavingsGoal Details</h2>
          <SavingGoalForm
            savingsGoal={selectedSavingsGoal}
            onCreateSavingsGoal={onCreateSavingsGoal}
            onUpdateSavingsGoal={onUpdateSavingsGoal}
            onDeleteSavingsGoal={onDeleteSavingsGoal}
          />

          {error && <Alert variant="danger" className="mt-3">{error}</Alert>}

          <div className="text-center mt-3">
            <p>
            </p>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SavingGoalPage;
