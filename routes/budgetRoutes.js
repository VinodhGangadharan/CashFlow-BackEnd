// import the express
const express = require('express');
const budgetController = require('../controllers/budgetController');
const auth = require('../utils/auth');

// create a router
const budgetRouter = express.Router();

budgetRouter.get('/',auth.isAuthenticated, budgetController.getBudgets);
budgetRouter.post('/', auth.isAuthenticated, budgetController.createBudgets);
budgetRouter.delete('/:id', auth.isAuthenticated, budgetController.deleteBudgets);

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
module.exports = budgetRouter;