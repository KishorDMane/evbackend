const mongoose=require("mongoose");
const express=require("express");
const jwt=require("jsonwebtoken");

require("dotenv").config();
const tokenValidator=require("../middlewares/tokenvalidtor");
const {UserModel}=require("../model/usernote.model")

const userNotes=express.Router();
userNotes.use(tokenValidator)
userNotes.post("/note",async(req,res)=>{
    const privetKey=process.env.privetKey
    const token=req.headers.authorization?.split(" ")[1]
    jwt.verify(token, privetKey, async function(err, decoded) {
        // console.log(decoded?.email,decoded.id) // bar

       const  userID= decoded.id;
       const taskname= req.body.taskname;
        const status= req.body.status;
        const tag=req.body.tag;
       console.log(userID,taskname,status,tag)

        await UserModel.insertMany({userID,taskname,status,tag});
        res.send("User aded")        
       
       
      });








})

userNotes.get('/note',(req,res)=>{
    const privetKey=process.env.privetKey
    const token=req.headers.authorization?.split(" ")[1]
    jwt.verify(token, privetKey, async function(err, decoded) {
        // console.log(decoded?.email,decoded.id) // bar


       const data= await UserModel.find({userID:decoded.id});
        res.send({data})        
       
       
      });
})

module.exports={userNotes}




