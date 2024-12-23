const express=require("express");
const app=express();
const path=require("path")

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));

app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("index"); //this index page is shown at / route and it must be in views folder
});

app.get("/profile/:username",function(req,res){
    
    res.send("Profile page of "+req.params.username); //this index page is shown at / route and it must be in views folder
});

app.get("/profile/:username/:age",function(req,res){
    
    res.send("Profile page of "+req.params.username+" Age is "+req.params.age); //this index page is shown at / route and it must be in views folder
});



app.listen(3000,function(){
    console.log("Running...");
})