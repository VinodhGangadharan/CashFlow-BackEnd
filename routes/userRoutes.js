// import the express
const express = require('express');
const userController = require('../controllers/userController');
const auth = require('../utils/auth');

// create a router for the auth routes
const userRouter = express.Router();



userRouter.put('/', auth.isAuthenticated, userController.updateUser);

// export the router
module.exports = userRouter;