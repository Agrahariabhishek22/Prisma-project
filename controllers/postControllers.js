const prisma=require('../prisma/index');
const {ObjectId}=require('mongodb');

exports.doPost=async(req,res)=>{
    try {
        console.log("in doPost");
        
        const {title,body}=req.body;
        const {email}=req.user;
        // console.log(email);
        
        const user=await prisma.user.findUnique({
            where:{
                email:email
            }
        })
        if(!user){
            return res.status(404).json({
                error:"User not found"
            })
        }
        console.log("before post creation");
        
        const post=await prisma.post.create({
            data:{
                title,
                body,
                author:{
                    connect:{id:new ObjectId(user.id)},
                }
            }
        })
        console.log("After post creation");
        return res.status(201).json({
            success:true,
            post
        })
    } catch (error) {
            return res.status(500).json({ error: "Internal Server Error" });
    }
}
y