const jwt=require('jsonwebtoken');

const getJwtToken=(user)=>{
    return jwt.sign({userId:user.id,email:user.email},process.env.JWT_SECRET,{
        expiresIn:'1 day'
    })
}

module.exports=getJwtToken;