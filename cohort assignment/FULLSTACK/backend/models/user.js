const mongoose=require("mongoose") ;  
//schema->define structure of db//model is way to interact with db
const userSchema=new mongoose.Schema({
  name:{
    type:String , 
    required:true,
  }, 
  email : {
    type:String, 
    unique:true,
    required:true,
  }, 
  age:{
type:Number,
  },

} 
) 
//createmodel 
const User=mongoose.model('User' , userSchema)  
module.exports=User; 
