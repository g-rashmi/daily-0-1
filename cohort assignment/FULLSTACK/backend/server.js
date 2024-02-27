const express=require("express") ;  
const mongoose=require("mongoose") ;   
const dotenv=require("dotenv")  ;
const User= require("./models/user") ;
dotenv.config()
const app =express();   

mongoose.connect(process.env.URI).then(()=>{
console.log("connected successfully")  

app.listen(process.env.PORT|| 8000,(err)=>{    

  if(err){
    console.log(err)
  }
  console.log("server start successful"); 
})
}) .catch((err)=>{
console.log(err);
}) 
app.post("/",async (req,res)=>{ 
  try{
    const [name ,email,age]= req.body ;  
    const userData= User.create({ name:name, 
    email:email , 
  age:age, }) ;  
  res.status(201).json(userData)
  }
  catch(err){
res.send(400).json({err: err.message})
  }
 
})

app.get("/",(req,res)=>{
  res.send("api-running") ; 
}) 
