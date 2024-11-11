const { default: mongoose } = require("mongoose");

const InvestmentCategorySchema = new mongoose.Schema({

    category:String,

   
});

module.exports = mongoose.model('InvestmentCategory', InvestmentCategorySchema, 'investmentcategories');