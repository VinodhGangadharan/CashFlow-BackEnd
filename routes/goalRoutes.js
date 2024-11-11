// import the express
const express = require('express');
const goalController = require('../controllers/goalController');
const auth = require('../utils/auth');

// create a router
const goalRouter = express.Router();

goalRouter.get('/',auth.isAuthenticated, goalController.getGoals);
goalRouter.post('/', auth.isAuthenticated, goalController.createGoals);
goalRouter.delete('/:id', auth.isAuthenticated, goalController.deleteGoals);

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
module.exports = goalRouter;