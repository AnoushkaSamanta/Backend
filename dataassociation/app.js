const express=require("express");
const app=express();
const userModel=require("./models/user");
const postModel=require("./models/post");

app.get("/",(req,res)=>{
    res.send("hey")
})


app.get("/create",async (req,res)=>{
    let user=await userModel.create({
        username:"megha",
        age:19,
        email:"megha@gmail.com"
    })
    res.send(user)
})


app.get("/post/create",async (req,res)=>{
    let post=await postModel.create({
        postdata:"Hello world..",
        user:"6770e299ee847250c43746a1",
    })
    let user=await userModel.findOne({_id:"6770e299ee847250c43746a1"})
    user.posts.push(post._id);
    await user.save();
    res.send({post,user})
})

app.listen(3000)