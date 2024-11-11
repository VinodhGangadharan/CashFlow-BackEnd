// import the express
const express = require('express');
const recurringexpenseController = require('../controllers/recurringexpenseController');
const auth = require('../utils/auth');

// create a router
const recurringexpenseRouter = express.Router();

recurringexpenseRouter.get('/',auth.isAuthenticated, recurringexpenseController.getRecurringExpenses);
recurringexpenseRouter.post('/', auth.isAuthenticated, recurringexpenseController.createRecurringExpenses);
recurringexpenseRouter.delete('/:id', auth.isAuthenticated, recurringexpenseController.deleteRecurringExpenses);

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
module.exports = recurringexpenseRouter;