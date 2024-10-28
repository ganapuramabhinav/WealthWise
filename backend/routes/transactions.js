// routes/transactions.js
const { addExpense, getExpense, deleteExpense } = require('../controllers/expense');
const { addIncome, getIncomes, deleteIncome } = require('../controllers/income');
const { addSavingGoal, getSavingGoals, deleteSavingGoal } = require('../controllers/savings'); // Import savings controller
const BankController = require('../controllers/BankController');
const router = require('express').Router();

router.post('/add-income', addIncome)
    .get("/get-incomes", getIncomes)
    .delete('/delete-income/:id', deleteIncome)
    .post('/add-expense', addExpense)
    .get("/get-expenses", getExpense)
    .delete('/delete-expense/:id', deleteExpense)
    .post('/add-saving-goal', addSavingGoal) // Route for adding saving goals
    .get("/get-saving-goals", getSavingGoals) // Route for fetching saving goals
    .delete('/delete-saving-goal/:id', deleteSavingGoal)// Route for deleting saving goals
    .post('/least-interest', BankController.getLeastInterestBank);

module.exports = router;
