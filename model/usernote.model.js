const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    userID: String,
    taskname: String,
    status: String,
    tag: String
})
const UserModel=mongoose.model("usernots",UserSchema)
module.exports={UserModel}