const Expense = require('../models/expense.model');

module.exports.createExpense = (req, res, next) => {
  const { description, amount, date, category } = req.body;

  const newExpense = new Expense({ description, amount, date, category });

  newExpense.save()
    .then(() => {
      res.status(201).json({ message: 'Gasto creado con éxito.' });
    })
    .catch(error => {
      next(error);
    });
};
module.exports.getExpenseById = (req, res, next) => {
  const expenseId = req.params.id;

  Expense.findById(expenseId)
    .then(expense => {
      if (!expense) {
        return res.status(404).json({ message: 'Gasto no encontrado' });
      }
      res.status(200).json({ expense });
    })
    .catch(error => {
      next.status(500).json({ message: error.message });
    });
};

module.exports.updateExpense = (req, res, next) => {
  const expenseId = req.params.id;
  const { description, amount, date, category } = req.body;

  Expense.findByIdAndUpdate(expenseId, { description, amount, date, category }, { new: true })
    .then(expense => {
      if (!expense) {
        return res.status(404).json({ message: 'Gasto no encontrado' });
      }
      res.status(200).json({ message: 'Gasto actualizado con éxito.', expense });
    })
    .catch(error => {
      next.status(500).json({ message: error.message });
    });
};

module.exports.deleteExpense = (req, res, next) => {
  const expenseId = req.params.id;

  Expense.findByIdAndDelete(expenseId)
    .then(expense => {
      if (!expense) {
        return res.status(404).json({ message: 'Gasto no encontrado' });
      }
      res.status(200).json({ message: 'Gasto eliminado con éxito.' });
    })
    .catch(error => {
      next.status(500).json({ message: error.message });
    });
};

module.exports.getExpensesByCategory = (req, res, next) => {
  const category = req.params.category;
 
  Expense.find({ category })
     .then(expenses => {
       if (!expenses) {
         return res.status(404).json({ message: 'No se encontraron gastos' });
       }
       res.status(200).json({ expenses });
     })
     .catch(error => {
       next.status(500).json({ message: error.message });
     });
 };
 

 
