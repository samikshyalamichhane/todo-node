const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router();
let Todo = require('../models/todo.js');
const TodoController = require("../controller/todoController.js")();

router.use(
    bodyParser.urlencoded({
        extended: true
    })
)
router.get('/createForm',TodoController.getCreateForm)
router.get('/editForm',TodoController.getEditForm)


router.get('/todos',TodoController.getAll)

router.post('/addTodo',TodoController.create)

router.patch('/updateTodo',TodoController.update)

module.exports = router;