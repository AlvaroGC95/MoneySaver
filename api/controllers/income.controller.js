const Income = require('../models/income.model');

module.exports.income = [];
let incomeIdCounter = 1;

module.exports.getIncome = (req, res) => {
  const { userId } = req.query;
  const userIncome = income.filter((income) => income.userId === Number(userId));
  res.json(userIncome);
};

module.exports.createIncome = (req, res) => {
  const { userId, description, amount } = req.body;
  const newIncome = new Income(incomeIdCounter++, userId, description, amount);
  income.push(newIncome);
  res.json(newIncome);
};

