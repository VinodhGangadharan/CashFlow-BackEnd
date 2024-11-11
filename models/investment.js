const { default: mongoose } = require("mongoose");

const InvestmentSchema = new mongoose.Schema({

    category:String,
    purchaseprice:Number,
    currentvalue:Number,  
    performance:Number,  
    description:String,

    //perfomanceovertime:Number

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
   
});

module.exports = mongoose.model('Investment', InvestmentSchema, 'investments');