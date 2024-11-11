const { default: mongoose } = require("mongoose");

const BudgetSchema = new mongoose.Schema({

    category:String,
    limit:Number,
    //period:String
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
   
   
});

module.exports = mongoose.model('Budget', BudgetSchema, 'budgets');