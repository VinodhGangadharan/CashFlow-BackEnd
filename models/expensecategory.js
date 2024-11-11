const { default: mongoose } = require("mongoose");

const ExpenseCategorySchema = new mongoose.Schema({

    category:String,

   
});

module.exports = mongoose.model('ExpenseCategory', ExpenseCategorySchema, 'expensecategories');