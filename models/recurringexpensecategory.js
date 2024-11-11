const { default: mongoose } = require("mongoose");

const RecurringExpenseCategorySchema = new mongoose.Schema({

    category:String,

   
});

module.exports = mongoose.model('RecurringExpenseCategory', RecurringExpenseCategorySchema, 'recurringexpensecategories');