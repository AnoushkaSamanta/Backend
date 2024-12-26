const mongoose=require("mongoose");

mongoose.connect(`mongodb://127.0.0.1:27017/mongopractice`);

const userSchema=mongoose.Schema({
    name:String,
    username:String,
    email:String
})

//model name will be users ,not user
module.exports=mongoose.model("user",userSchema);



