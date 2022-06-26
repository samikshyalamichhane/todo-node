const { createTodo } = require("../validation/todoValidation");

const TodoService = require("../service/todoService")();

const TodoController = () =>{
    const getAll=async (req,res,next)=>{
        const result =await TodoService.getAll(req.body)
        console.log(result)
        return  res.status(200).send({
            data:result
        });
    }

    const getCreateForm = (req,res,next)=>{
        res.render("addTodo")
    }

    const getEditForm = (req,res,next) =>{
        res.render("editTodo")
    }

    const create = async (req,res,next)=>{
        
        try{
            const name = req.body.name;
            const deadline = req.body.deadline;
            const points = req.body.points
            const address = req.body.address
            const {value,error} = await createTodo.validate({
                name,
                deadline,
                points,
                address
            })
            console.log(error)
            if(error){
                throw error
            }
            const result = await TodoService.create({
                name,
                deadline,
                points
            })
            return res.status(200).send({
                data:result
            })
        } catch(err){
            console.log(err)
            res.status(500).send({
                err:err
            })
        }
    }
    const update = async(req,res,next)=>{
        try{
            const id = req.body.id;
            const name = req.body.name;
            const deadline = req.body.deadline;
            const points = req.body.points
            const result = await TodoService.update({
                id,
                name,
                deadline,
                points
            })
            return res.status(200).send({
                data:result
            })
        } catch(err){
            console.log(err)
            res.status(500).send({
                err:err
            })

        }
    }
    
    return {
        getAll,
        create,
        update,
        getCreateForm,
        getEditForm
    }
}

module.exports = TodoController