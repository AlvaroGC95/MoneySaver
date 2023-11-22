const express = require('express');
const router = express.Router();
const expenseCategoryController = require('../controllers/expenseCategory.controller');
const expenseController = require('../controllers/expense.controller');
const savingsGoalController = require('../controllers/savingGoal.controller');
//const incomesController = require('../controllers/income.controller')
const upload = require("../config/multer.config");
const user = require('../controllers/user.controller');
const auth = require('../middleware/auth.middleware');



// Rutas de Usuarios
router.post('/register',upload.single("avatar"), user.register);
router.post('/login', user.login);
router.get('/profile', auth.isAuthenticated, user.getProfile);
router.post('/logout', user.logout);


// Rutas de Categorías de Gastos
router.post('/expense-categories', expenseCategoryController.createExpenseCategory);
router.get('/expense-categories',expenseCategoryController.getExpenseCategories);
router.get('/expense-categories/:id', expenseCategoryController.getExpenseCategoryById);
router.put('/expense-categories/:id', expenseCategoryController.updateExpenseCategory);
router.delete('/expense-categories/:id', expenseCategoryController.deleteExpenseCategory);

// Rutas de Gastos

router.post('/expenses',   expenseController.createExpense);
router.get('/expenses/:id', expenseController.getExpenseById);
router.put('/expenses/:id', expenseController.updateExpense);
router.delete('/expenses/:id', expenseController.deleteExpense);

// Rutas de Metas de Ahorro
router.post('/savings-goals',  savingsGoalController.createSavingsGoal);
router.get('/savings-goals',  savingsGoalController.getSavingsGoals);
router.get('/savings-goals/:id',  savingsGoalController.getSavingsGoalById);
router.put('/savings-goals/:id',   savingsGoalController.updateSavingsGoal);
router.delete('/savings-goals/:id',  savingsGoalController.deleteSavingsGoal);

// Rutas de ingresos
//router.get('/incomes', incomesController.getIncomes);
//router.post('/incomes', incomesController.createIncomes);   


module.exports = router;
