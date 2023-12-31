const SavingsGoal = require('../models/savingGoal.model');

module.exports.createSavingsGoal = (req, res, next) => {
  const { name, targetAmount, currentAmount, deadline } = req.body;
  const userId = req.session.userId;
  console.log (userId);
  const newSavingsGoal = new SavingsGoal({ name, targetAmount, currentAmount, deadline, user: userId });

  newSavingsGoal.save()
    .then(() => {
      res.status(201).json({ message: 'Meta de ahorro creada con éxito.' });
    })
    .catch(error => {
      res.status(500).json({ message: error.message });
    });
};

module.exports.getSavingsGoals = (req, res, next) => {
  const userId = req.session.userId; // Asumiendo que tienes una sesión configurada
  SavingsGoal.find({ user: userId })
    .then((savingsGoals) => {
      res.json(savingsGoals);
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
};

module.exports.getSavingsGoalById = (req, res, next) => {
  const goalId = req.params.id;

  SavingsGoal.findById(goalId)
    .then(goal => {
      if (!goal) {
        return res.status(404).json({ message: 'Meta de ahorro no encontrada' });
      }
      res.status(200).json({ goal });
    })
    .catch(error => {
      res.status(500).json({ message: error.message });
    });
};

module.exports.updateSavingsGoal = (req, res, next) => {
  const goalId = req.params.id;
  const { name, targetAmount, currentAmount, deadline } = req.body;

  SavingsGoal.findByIdAndUpdate(goalId, { name, targetAmount, currentAmount, deadline }, { new: true })
    .then(goal => {
      if (!goal) {
        return res.status(404).json({ message: 'Meta de ahorro no encontrada' });
      }
      res.status(200).json({ message: 'Meta de ahorro actualizada con éxito.', goal });
    })
    .catch(error => {
      res.status(500).json({ message: error.message });
    });
};

module.exports.deleteSavingsGoal = (req, res, next) => {
  const goalId = req.params.id;

  SavingsGoal.findByIdAndDelete(goalId)
    .then(goal => {
      if (!goal) {
        return res.status(404).json({ message: 'Meta de ahorro no encontrada' });
      }
      res.status(200).json({ message: 'Meta de ahorro eliminada con éxito.' });
    })
    .catch(error => {
      res.status(500).json({ message: error.message });
    });
};
