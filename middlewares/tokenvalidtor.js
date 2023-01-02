const jwt=require("jsonwebtoken");

require("dotenv").config();





const tokenValidator=async(req,res,next)=>{
    const privetKey=process.env.privetKey
    const resTokenKey=process.env.resTokenKey
const token=req.headers.authorization?.split(" ")[1]
    jwt.verify(token, privetKey, function(err, decoded) {
        // console.log(decoded?.email) // bar
        if(decoded==undefined){
            res.send(err)
        }
        next()

      });
}
module.exports=tokenValidator