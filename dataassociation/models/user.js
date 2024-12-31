const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/dataassociation")

const userSchema=mongoose.Schema({
    username:String,
    email:String,
    age:Number,
    posts:[
        {type:mongoose.Schema.Types.ObjectId,   //posts is an array of ids of post Schema so ref is post
            ref:'post'
        }
        
    ]
})

module.exports=mongoose.model('user',userSchema)