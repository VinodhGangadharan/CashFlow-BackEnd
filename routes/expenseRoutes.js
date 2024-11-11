// import the express
const express = require('express');
const expenseController = require('../controllers/expenseController');
const auth = require('../utils/auth');

// create a router
const expenseRouter = express.Router();

expenseRouter.get('/',auth.isAuthenticated, expenseController.getExpenses);
expenseRouter.post('/', auth.isAuthenticated, expenseController.createExpense);
expenseRouter.delete('/:id', auth.isAuthenticated, expenseController.deleteExpenses);

// define the endpoints
/*
companyRouter.get('/', companyController.getCompanies);
companyRouter.get('/search', companyController.searchCompanies);
companyRouter.get('/:id', companyController.getCompany);
companyRouter.post('/', auth.isAuthenticated, auth.isAdmin, companyController.createCompany);
companyRouter.put('/:id', auth.isAuthenticated, auth.isAdmin, companyController.updateCompany);
companyRouter.delete('/:id', auth.isAuthenticated, auth.isAdmin, companyController.deleteCompany);
companyRouter.get('/:id/jobs', companyController.getCompanyJobs);*/

// export the router
module.exports = expenseRouter;