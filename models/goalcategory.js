const { default: mongoose } = require("mongoose");

const GoalCategorySchema = new mongoose.Schema({

    category:String,

   
});

module.exports = mongoose.model('GoalCategory', GoalCategorySchema, 'goalcategories');