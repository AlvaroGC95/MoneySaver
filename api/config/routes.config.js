const express = require('express');
const router = express.Router();
const expenseCategoryController = require('../controllers/expenseCategory.controller');
const expenseController = require('../controllers/expense.controller');
const savingsGoalController = require('../controllers/savingGoal.controller');
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

router.post('/expenses',  auth.isAuthenticated, expenseController.createExpense);
router.get('/expenses/:id', auth.isAuthenticated, expenseController.getExpenseById);
router.put('/expenses/:id', auth.isAuthenticated, expenseController.updateExpense);
router.delete('/expenses/:id', auth.isAuthenticated, expenseController.deleteExpense);

// Rutas de Metas de Ahorro
router.post('/savings-goals', auth.isAuthenticated, savingsGoalController.createSavingsGoal);
router.get('/savings-goals', auth.isAuthenticated, savingsGoalController.getSavingsGoals);
router.get('/savings-goals/:id', auth.isAuthenticated, savingsGoalController.getSavingsGoalById);
router.put('/savings-goals/:id', auth.isAuthenticated, savingsGoalController.updateSavingsGoal);
router.delete('/savings-goals/:id', auth.isAuthenticated, savingsGoalController.deleteSavingsGoal);

module.exports = router;
