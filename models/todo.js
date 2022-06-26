let mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
    name:String,
    deadline:String,
    points:Number,
    CreatedDate:{
        type:String,
        default:Date.now()
    }
})
module.exports = mongoose.model("Todo",TodoSchema);