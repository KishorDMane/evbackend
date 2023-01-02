const mongoose=require("mongoose");
const express=require("express");
const jwt=require("jsonwebtoken");
require("dotenv").config();
const loginrout=express.Router();
const {SignupModel}=require("../model/signup.model");



loginrout.post("/user",async(req,res)=>{

    const payload=req.body;
    const email=payload.email;
    console.log('email: ', email);

    const user=await SignupModel.findOne({email});
    if(user==undefined){
        res.send("unvalid user")
    }
    if(payload.password!=user.password){
        res.send("unvalid user")
    }
    const id=user._id;
    privetKey=process.env.privetKey
    resTokenKey=process.env.resTokenKey


    const token = jwt.sign({ id,email}, privetKey,{expiresIn:"1h"})
    const restoken = jwt.sign({ id,email }, privetKey,{expiresIn:"1h"})
    res.send({"token":token,"restoken":restoken})

})

module.exports={loginrout}