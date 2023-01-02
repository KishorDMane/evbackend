const express=require("express");
const { connection } = require("./config/db");

const {signuprout}=require("./router/signup.rourer")
const {loginrout}=require("./router/login.router")
const {userNotes}=require("./router/user.router")



const app=express()

app.use(express.json())
app.use("/signup",signuprout)
app.use("/login",loginrout)
app.use("/user",userNotes)

app.get("/get",(req,res)=>{
    res.send("working")
})


app.listen(8111,async()=>{ 
    await connection 
    console.log("8111 is working")
})