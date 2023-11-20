// SavingGoalPage.js
import React from 'react';
import SavingGoalForm from '../components/savingGoalForm';

const SavingGoalPage = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Metas de Ahorro</h2>
              {/* Aquí podrías mostrar la lista de metas existentes si lo deseas */}
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Crear Nueva Meta de Ahorro</h2>
              <SavingGoalForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavingGoalPage;
