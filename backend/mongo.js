const { Int32 } = require("mongodb")
const mongoose=require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/Lego")  //127.0.0.1
.then(()=>
{
    console.log("mongodb connected")
})
.catch(()=>
{
    console.log("failed to connect to mongodb")
})



const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    name:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
})
    

const collection=mongoose.model("user",newSchema)

module.exports=collection