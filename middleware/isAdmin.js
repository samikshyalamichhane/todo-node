const constants = require("../config/constants")

const TokenService = require("../service/tokenService")()

const isAdmin =async(req,res,next)=>{
    try{
const [bearer,token] = req.headers.authorization.split(' ')
const tokenSecret = constants.tokenSecret

const result = await TokenService.verifyToken({token,tokenSecret})
if(result?.role!=='admin'){
    throw new Error('User Not Authenticated')
}
next()
} catch(err){
    console.log(err)
    res.status(500).send(err.message)
}
}

module.exports = isAdmin