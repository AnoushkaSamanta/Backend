// fs module

const fs=require('node:fs');

fs.writeFile("hi.txt","Helloo pofffff",function(err){
    if(err)
        console.error(err);
    else
        console.log("Done");
})

fs.appendFile("hi.txt","Kichi kichi",function(err){
    if(err)
        console.error(err);
    else
        console.log("Done");
})

fs.rename("hi.txt","megha.txt",function(err){
    if(err)
        console.error(err);
    else
        console.log("Done");
})

fs.copyFile("megha.txt","copy.txt",function(err){
    if(err)
        console.error(err);
    else
        console.log("Done");
})

fs.unlink("copy.txt",function(err){
    if(err)
        console.error(err);
    else
        console.log("Done");
})

fs.rmdir("../../",{recursive:true},function(err){
    if(err)
        console.error(err);
    else
        console.log("Done");
})

fs.readFile("megha.txt","utf8",function(err,data){
    if(err)
        console.log(err);
    else
        console.log(data)
})