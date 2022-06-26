require('dotenv').config();
let saltRounds;
if(process.env.SALT_ROUND){
     saltRounds =parseInt(process.env.SALT_ROUND)
}

module.exports ={
    saltRound:saltRounds
}