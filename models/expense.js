const { default: mongoose } = require("mongoose");

const ExpenseSchema = new mongoose.Schema({

    amount:Number,
    date:Date,
    category:String,
    description:String,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
   
});

module.exports = mongoose.model('Expense', ExpenseSchema, 'expenses');