const express=require("express");
const bcrypt=require("bcrypt");

const {SignupModel}=require("../model/signup.model")


const signuprout=express.Router();


signuprout.post("/user",async(req,res)=>{
    // res.send("signup succesfull")
   const payload=req.body;
  

    
   await SignupModel.insertMany(payload);
   res.send("signup succesfull")
   
    
})
module.exports={signuprout}