const express = require("express");
const bodyParser = require("body-parser");
let authenticate = require('../middleware/authentication')

const router = express.Router();
let User = require('../models/user.js');
const UserController = require("../controller/userController.js")();

router.use(
    bodyParser.urlencoded({
        extended: true
    })
)

router.get('/users',authenticate,UserController.getAll)

router.post('/login',UserController.login)


router.post('/addUser',UserController.create)

router.patch('/updateUser',UserController.update)

module.exports = router;