const jwt=require('jsonwebtoken');

exports.auth=async(req,res,next)=>{
    try {
        const token =req.cookies.token;
        console.log(token);
        
    if(!token){
        throw new error("Kindly login first");
    }
    try {
        const decode=jwt.verify(token,process.env.JWT_SECRET);
        req.user=decode;
        next();
    } catch (error) {
        return res
				.status(401)
				.json({ success: false, message: "token is invalid" });
    }
    } catch (error) {
        return res.status(401).json({
			success: false,
			message: `Something Went Wrong While Validating the Token`,
		});
    }
}