// import the express
const express = require('express');
const expensecategoryController = require('../controllers/expensecategoryController');
const auth = require('../utils/auth');

// create a router
const expensecategoryRouter = express.Router();

expensecategoryRouter.get('/',auth.isAuthenticated, expensecategoryController.getExpenseCategories);
//goalRouter.post('/', auth.isAuthenticated, goalController.createGoals);

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
module.exports = expensecategoryRouter;