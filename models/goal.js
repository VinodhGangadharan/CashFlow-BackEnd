const { default: mongoose } = require("mongoose");

const GoalSchema = new mongoose.Schema({

    category:String,
    targetamount:Number,
    deadline:Date,
    "createdAt": {
        type: Date,
        default: Date.now
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
   
});

module.exports = mongoose.model('Goal', GoalSchema, 'goals');