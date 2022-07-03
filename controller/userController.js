
const UserService = require("../service/userService")();

const UserController = () =>{
    const getAll=async (req,res,next)=>{
        const result =await UserService.getAll(req.body)
        return  res.status(200).send({
            data:result
        });
    }

    const create = async (req,res,next)=>{
        try{
            const FirstName = req.body.FirstName;
            const LastName = req.body.LastName;
            const address = req.body.address;
            const age = req.body.age
            const status = req.body.status
            const email = req.body.email
            const password = req.body.password
            const role = req.body.role
            const result = await UserService.create({
                FirstName,
                LastName,
                address,
                age,
                status,
                email,
                password,
                role
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

    const login = async (req,res,next)=>{
        try{
            const email = req.body.email
            const password = req.body.password
            const role = req.body.role
            const result = await UserService.login({
                email,
                password,
                role
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
            const FirstName = req.body.FirstName;
            const LastName = req.body.LastName;
            const address = req.body.address;
            const age = req.body.age
            const status = req.body.status
            const email = req.body.email
            const result = await UserService.update({
                id,
                FirstName,
                LastName,
                address,
                age,
                status,
                email
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
        login
    }
}

module.exports = UserController