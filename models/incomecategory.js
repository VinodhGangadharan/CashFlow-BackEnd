const { default: mongoose } = require("mongoose");

const IncomeCategorySchema = new mongoose.Schema({

    category:String,

   
});

module.exports = mongoose.model('IncomeCategory', IncomeCategorySchema, 'incomecategories');