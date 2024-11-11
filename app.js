// import the express module
const express = require('express');
const companyRouter = require('./routes/companyRoutes');
const jobRouter = require('./routes/jobRoutes');
const authRouter = require('./routes/authRoutes');
const userRouter = require('./routes/userRoutes');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const expenseRouter = require('./routes/expenseRoutes');
const incomeRouter = require('./routes/incomeRoutes');
const budgetRouter = require('./routes/budgetRoutes');
const goalRouter = require('./routes/goalRoutes');
const recurringexpenseRouter = require('./routes/recurringexpenseRoutes');
const investmentRouter = require('./routes/investmentRoutes');
const incomecategoryRouter = require('./routes/incomecategoryRoutes');
const expensecategoryRouter = require('./routes/expensecategoryRoutes');
const goalcategoryRouter = require('./routes/goalcategoryRoutes');
const recurringexpensecategoryRouter = require('./routes/recurringexpensecategoryRoutes');
const investmentcategoryRouter = require('./routes/investmentcategoryRoutes');

// create an express application
const app = express();

// use the cors middleware
app.use(cors({
    //origin: 'http://localhost:5173',
    origin: 'https://cashflowzen.netlify.app',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// use the express middleware to parse JSON bodies
app.use(express.json());

// use the cookie parser middleware
app.use(cookieParser());

app.use('/auth', authRouter);
app.use('/companies', companyRouter);
app.use('/jobs', jobRouter);

app.use('/expenses', expenseRouter);
app.use('/incomes', incomeRouter);
app.use('/budgets', budgetRouter);
app.use('/goals', goalRouter);
app.use('/recurringexpenses', recurringexpenseRouter);
app.use('/investments', investmentRouter);
app.use('/incomecategories', incomecategoryRouter);
app.use('/expensecategories', expensecategoryRouter);
app.use('/goalcategories', goalcategoryRouter);
app.use('/recurringexpensecategories', recurringexpensecategoryRouter);
app.use('/investmentcategories', investmentcategoryRouter);
app.use('/userprofile', userRouter);



// export the express application
module.exports = app;