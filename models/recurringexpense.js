const { default: mongoose } = require("mongoose");

const RecurringExpenseSchema = new mongoose.Schema({

    category:String,
    amount:Number,
    expensedate:Date,
    period:String,
    description:String,
      
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
   
});

module.exports = mongoose.model('RecurringExpense', RecurringExpenseSchema, 'recurringexpenses');