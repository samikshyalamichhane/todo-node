const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router();
let Todo = require('../models/todo.js');

router.use(
    bodyParser.urlencoded({
        extended: true
    })
)
router.get('/hello',(req,res)=>{
    res.render('hello')
})

router.get('/todo-page',(req,res)=>{
    res.render('todo');
})

router.get('/todos', (req, res) => {

    console.log('this is from todos route');
    Todo.find((err, docs) => {
        if (err) {
            console.log(err)
        } else {
            console.log(docs)
            res.send(docs);
        }
    })
    // res.send('This is from todos route')
})

router.get('/get-todo', (req, res) => {
    res.send('this is from get todo page');
    console.log('This is from Todo get page');
})



router.post('/add', (req, res) => {
    console.log(req.body)
    // const id = req.body.id;
    // const title = req.body.title;
    // const desc = req.body.desc;
    // const address = req.body.address;
    // const detail = req.body.detail;
    // console.log(id)
    // console.log(title)
    // console.log(desc)
    // res.send({ id, title, desc, address, detail });
    console.log('this is from add page')
    let todo = new Todo({
        name: req.body.name,
        deadline: req.body.deadline,
        points: req.body.points
    })
    var promise = todo.save();
    promise.then((todo) => {
        console.log("Todo Saved");
        res.send(todo);
    })
})

router.get('/getById',(req,res)=>{
    Todo.findById({_id:req.body.id},(err,docs)=>{
        if(err){
            console.log(err,'err')
        } else {
            console.log(docs,'docs')
            res.send(docs)
        }
    })
})

router.get('/getOne',(req,res)=>{
    Todo.findOne({name:req.body.name},(err,docs)=>{
        if(err){
            console.log(err,'err')
        } else {
            console.log(docs,'docs')
            res.send(docs)
        }
    })
})

router.patch('/findoneandupdate',(req,res)=>{
    Todo.findOneAndUpdate({name:req.body.name},
        { $set: { deadline: req.body.deadline, desc:req.body.desc} },
        (err,docs)=>{
        if(err){
            console.log(err,'err')
        } else {
            console.log(docs,'docs')
            res.send(docs);
        }
    })

})

router.delete('/delete',(req,res)=>{
    console.log('delete')
    Todo.findOneAndDelete({_id:req.body.id},(err,docs)=>{
        if(err){
            console.log(err,'err')
        } else {
            console.log(docs,'docs')
            res.send(docs)
        }
    })
})

router.get('/gettodos',(req,res)=>{
    Todo.find({name:req.body.name},(err,docs)=>{
        if(err){
            console.log(err)
        } else {
            console.log(docs)
            res.send(docs)
        }
    })
})

router.patch('/edit', (req, res) => {
    console.log('edit')
    Todo.findByIdAndUpdate(
        { _id: req.body.id },
        { $set: { name: req.body.name, deadline: req.body.deadline, desc:req.body.desc} },
        function (err, docs) {
            if (err) {
                console.log(err)
            } else {
                console.log(docs)
                res.send(docs)
            }
        }
    )
})

module.exports = router;