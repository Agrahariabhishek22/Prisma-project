const express=require("express")
const app=express();
const cookieParser=require('cookie-parser');
require('dotenv').config();

app.use(express.json()); // Parses incoming requests with Content-Type: application/json
app.use(express.urlencoded({extended:true})) //Parses incoming requests with Content-Type: application/x-www-form-urlencoded
app.use(cookieParser());  //parses cookies coming in request
app.get('/',(req,res)=>{
    res.send("Welcome to Prisma ORM");
})


app.listen(3000,()=>{
    console.log("Server is running on PORT 3000");
    
})