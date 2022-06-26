const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const User = require('../models/user.js');

router.use(
    bodyParser.urlencoded({
        extended:true
    })
)

router.get('/users',(req,res)=>{
    console.log('This is form users route')
    User.find((err,docs)=>{
        if(err){
            console.log(err)
        } else{
            console.log(docs)
            res.send(docs)
        }
    })
    // res.send("This is from users route"); This cannot be send more than one time.
})


router.post('/add-user',(req,res)=>{
    let user = new User({
        FirstName:req.body.FirstName,
        LastName:req.body.LastName,
        address:req.body.address,
        age:req.body.age,
        class:req.body.class,
        status:req.body.status,
        email:req.body.email
    })
    var promise = user.save();
    promise.then((user)=>{
        console.log("user Saved");
        res.send(user);
    })
})

router.delete('/deleteUser',(req,res)=>{
    User.findOneAndDelete({_id:req.body.id},(err,docs)=>{
        if(err){
            console.log(err)
        } else{
            console.log(docs)
            res.send(docs)
        }
    })
})

router.delete('/deletemany',(req,res)=>{
    console.log('deletemany')
    User.deleteMany({FirstName:req.body.name},(err,docs)=>{
        if(err){
            console.log(err)
        } else{
            console.log(docs)
            res.send(docs)
        }
    })
})

module.exports = router;