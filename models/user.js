let mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    FirstName:String,
    LastName:String,
    address:String,
    age:Number,
    password:String,
    status:Boolean,
    email:{
        type:String,
        required:true,
    },
    createdDate:{
        type:String,
        default:Date.now()
    }
})

module.exports = mongoose.model("user",UserSchema)