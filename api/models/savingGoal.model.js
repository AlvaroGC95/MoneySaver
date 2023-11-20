const mongoose = require('mongoose');

const savingsGoalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  targetAmount: {
    type: Number,
    required: true,
  },
  currentAmount: {
    type: Number,
    required: true,
  },
  deadline: {
    type: Date,
    required: true,
  },
});

const SavingsGoal = mongoose.model('SavingsGoal', savingsGoalSchema);

module.exports = SavingsGoal;
