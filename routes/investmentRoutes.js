// import the express
const express = require('express');
const investmentController = require('../controllers/investmentController');
const auth = require('../utils/auth');

// create a router
const investmentRouter = express.Router();

investmentRouter.get('/',auth.isAuthenticated, investmentController.getInvestments);
investmentRouter.post('/', auth.isAuthenticated, investmentController.createInvestments);
investmentRouter.delete('/:id', auth.isAuthenticated, investmentController.deleteInvestments);

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
module.exports = investmentRouter;