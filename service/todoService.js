const TodoRepository = require("../repository/todoRepository")()

const TodoService =()=>{
    const getAll=async(args={})=>{
        const result = await TodoRepository.getAll(args)
        console.log(result)
        return result
    }
    const create = async(args={})=>{
        const name =args.name;
        const deadline =args.deadline;
        const points =args.points;
        const result = await TodoRepository.create({
            name,
            deadline,
            points
        })
        console.log(result,'service')
        return result
    }
    const update = async(args={})=>{
        const id = args.id;
        const name =args.name;
        const deadline =args.deadline;
        const points =args.points;
        console.log(args)
        const result = await TodoRepository.update({
            id,
            name,
            deadline,
            points
        })
        console.log(result,'service')
        return result
    }
    return {
        getAll,
        create,
        update
    }
}
module.exports = TodoService