// bring in prisma and cookie
const prisma=require('../prisma/index')

const cookieToken=require('../utils/cookieToken');


// user signup
exports.signup=async(req,res,next)=>{
    try {
        console.log("i am done");
        
        const {name,email,password}=req.body;
        if(!name||!email||!password){
            throw new Error('please provide all fields');
        }
        const user=await prisma.user.create({
            data:{
                name,
                email,
                password,
            }
        })
        console.log("before token");
        
        // send user a token
        cookieToken(user,res);
    } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ error: error.message });
}

}

exports.login=async(req,res,next)=>{
    try {
        const {email,password}=req.body;
        
    } catch (error) {
        
    }
}