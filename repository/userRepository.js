const User = require('../models/user');

const UserRepository =() =>{
    const getAll =async (args={})=>{
        const result = await User.find(args)
        console.log(result)
        return result
    }
    const create = async (args={})=>{
        const result = await User.create(args)
        console.log(result,'repo')
        return result
    }
    const findOne = async(args={})=>{
        const result = await User.findOne(args)
        return result
    }
    const update = async(args={})=>{
        const id = args.id;
        const FirstName =args.FirstName;
        const LastName =args.LastName;
        const age =args.age;
        const status =args.status;
        const email =args.email;
        const address =args.address;
        console.log(args,'repoo')
        const result = await User.findByIdAndUpdate(id, { $set: {FirstName:FirstName, LastName: LastName, age:age,status:status,email:email,address:address} })
        console.log(result,'repo')
        return result
    }
    return {
        getAll,
        create,
        update,
        findOne
    }
}
module.exports = UserRepository