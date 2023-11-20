const ExpenseCategory = require('../models/expenseCategory.model');

module.exports.createExpenseCategory = (req, res) => {
  const { name, description } = req.body;

  const newCategory = new ExpenseCategory({ name, description });

  newCategory.save()
    .then(() => {
      res.status(201).json({ message: 'Categoría de gasto creada con éxito.' });
    })
    .catch(error => {
      res.status(500).json({ message: error.message });
    });
};

module.exports.getExpenseCategories = (req, res ) => {
   ExpenseCategory.findOne({user: req.user._id})
  ExpenseCategory.find()
    .then(categories => {
      res.json(categories);
    })
    .catch(error => {
      res.status(500).json({ message: error.message });
    });
};

module.exports.getExpenseCategoryById = (req, res ) => {
  const categoryId = req.params.id;

  ExpenseCategory.findById(categoryId)
    .then(category => {
      if (!category) {
        return res.status(404).json({ message: 'Categoría de gasto no encontrada' });
      }
      res.status(200).json({ category });
    })
    .catch(error => {
      res.status(500).json({ message: error.message });
    });
};

module.exports.updateExpenseCategory = (req, res) => {
  const categoryId = req.params.id;
  const { name, description } = req.body;

  ExpenseCategory.findByIdAndUpdate(categoryId, { name, description }, { new: true })
    .then(category => {
      if (!category) {
        return res.status(404).json({ message: 'Categoría de gasto no encontrada' });
      }
      res.status(200).json({ message: 'Categoría de gasto actualizada con éxito.', category });
    })
    .catch(error => {
      res.status(500).json({ message: error.message });
    });
};

module.exports.deleteExpenseCategory = (req, res) => {
  const categoryId = req.params.id;

  ExpenseCategory.findByIdAndDelete(categoryId)
    .then(category => {
      if (!category) {
        return res.status(404).json({ message: 'Categoría de gasto no encontrada' });
      }
      res.status(200).json({ message: 'Categoría de gasto eliminada con éxito.' });
    })
    .catch(error => {
      res.status(500).json({ message: error.message });
    });
};

