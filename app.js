const express=require("express");
const app=express();
const userModel=require("./usermodel")

app.get("/",(req,res)=>{
  res.send("heloo")
})


app.get("/create",async (req,res)=>{
   let createduser= await userModel.create({         //mongoose code is always asynchronous code
        name:"Anoushka",                               //to make the code synchronous use async await
        username:"meghaa",
        email:"anoushka@gmail.com"
    })
     res.send(createduser);
  })


app.get("/update",async (req,res)=>{
    let updateduser=await userModel.findOneAndUpdate({username:"meghaa"},{name:"Megha"},{new:true})
      
    res.send(updateduser);
   }) 

app.get("/read",async (req,res)=>{
    let users=await userModel.find({name:"Megha"});
    res.send(users)
})  

app.get("/delete",async (req,res)=>{
    let user=await userModel.findOneAndDelete({name:"Megha"});
    res.send(user)
})  
app.listen(3000);