import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email:{type:String,required:true},
    password:{type:String,required:true},
    role:{type:String,required:true,default:"admin"}
}, {timestamps:true});

export const UsersModel = mongoose.model("userlerrr",userSchema)