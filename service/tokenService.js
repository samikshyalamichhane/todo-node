const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const constants = require('../config/constants');

const TokenService = () =>{
    const generateToken = async(args={})=>{

    console.log(args)
    const token = await jwt.sign(
        args.payload,
        args.secret,
        {
            algorithm:'HS256',
            expiresIn:args.tokenLife
        }
    )
    console.log(token)
    return token
    }
const verifyToken= async(args={}) => { 
    console.log(args)
const result = await jwt.verify(args.token,args.tokenSecret)
return result
}

    return {
        generateToken,
        verifyToken
    }
}
module.exports = TokenService