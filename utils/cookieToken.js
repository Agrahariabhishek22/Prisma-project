const getJwtToken=require('../helpers/jsonToken');



const cookieToken=(user,res)=>{
    const token=getJwtToken(user);
    const options={
        expires:new Date(Date.now()+3*24*60*60*1000),
        httpOnly:true
    }
    user.password=undefined;
    console.log(user);
    console.log(token);
    
    res.status(200).cookie('token',token,options).json({
        success:true,
        token,
        user 
    })
}

module.exports=cookieToken;