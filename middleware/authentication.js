const constants = require("../config/constants")

const TokenService = require("../service/tokenService")()

const authenticate =async(req,res,next)=>{
    try{
// console.log(req.body,'middleware')
// console.log(req.headers.authorization)
const [bearer,token] = req.headers.authorization.split(' ')
// console.log(token,'token')
// const tokenSecret = constants.tokenSecret
const tokenSecret = 'secret'
const result = await TokenService.verifyToken({token,tokenSecret})
console.log(result,'result ')
if(!result){
    throw new Error('JWT not verified')
}
next()
} catch(err){
    console.log(err)
    res.status(500).send(err.message)
}
}

module.exports = authenticate