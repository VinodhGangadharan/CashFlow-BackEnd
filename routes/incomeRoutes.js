// import the express
const express = require('express');
const incomeController = require('../controllers/incomeController');
const auth = require('../utils/auth');

// create a router
const incomeRouter = express.Router();

incomeRouter.get('/',auth.isAuthenticated, incomeController.getIncomes);
incomeRouter.post('/', auth.isAuthenticated, incomeController.createIncomes);
incomeRouter.delete('/:id', auth.isAuthenticated, incomeController.deleteIncomes);

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
module.exports = incomeRouter;