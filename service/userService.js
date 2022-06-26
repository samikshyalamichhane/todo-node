const passwordService = require("./passwordService")()

const UserRepository = require("../repository/userRepository")()

const UserService =()=>{
    const getAll=async(args={})=>{
        const result = await UserRepository.getAll(args)
        console.log(result)
        return result
    }
    const create = async(args={})=>{
        const FirstName =args.FirstName;
        const LastName =args.LastName;
        const age =args.age;
        const status =args.status;
        const email =args.email;
        const address =args.address;
        const password =args.password;
        let hashPassword = await passwordService.hashPassword(password)
        const result = await UserRepository.create({
            FirstName,
            LastName,
            age,
            address,
            status,
            email,
            password:hashPassword
        })
        console.log(result,'service')
        return result
    }

    const login = async(args={})=>{
        const email =args.email;
        const password =args.password;
        let user = await UserRepository.findOne({email:email})
        console.log(user?.password,'userpassword')
        console.log(password,'form')
        let compare = await passwordService.comparePassword(password,user?.password)
        if(!compare){
            throw new Error('password do not match')
        } 
        console.log('login')
        return {
            id:user?._id,
            email: user?.email
        }
    }
    const update = async(args={})=>{
        const id = args.id;
        const FirstName =args.FirstName;
        const LastName =args.LastName;
        const age =args.age;
        const status =args.status;
        const email =args.email;
        const address =args.address;
        console.log(args,'serv')
        const result = await UserRepository.update({
            id,
            FirstName,
            LastName,
            age,
            address,
            status,
            email
        })
        console.log(result,'service')
        return result
    }
    return {
        getAll,
        create,
        update,
        login
    }
}
module.exports = UserService