const { string } = require("joi");
const Joi = require("joi");

const createTodo = Joi.object({
    name:Joi.string().required(),
    deadline:Joi.date().required(),
    points:Joi.string().min(3).max(5),
    address:Joi.array()
})

module.exports = {createTodo}