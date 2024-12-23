//express



const express=require("express")
const app=express()

//makes json based data readable
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(function(req,res,next){
    console.log("middleware starts")
    next();
});



app.get("/",function(req,res){
    res.send("Heloooo kichi ")
    
})
 

app.get("/about",function(req,res,next){
   
    return next(new Error("something went wrong"))
})

//Error handling
app.use(function(err,req,res,next){
    console.error(err.stack)
    res.status(500).send("Something broke!")
 });
 
app.listen(3000)