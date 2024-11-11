const { default: mongoose } = require("mongoose");

const IncomeSchema = new mongoose.Schema({

    category:String,
    amount:Number,
    date:Date,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
   
   
});

module.exports = mongoose.model('Income', IncomeSchema, 'incomes');