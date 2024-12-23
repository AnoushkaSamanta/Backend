


//http module

const http=require("node:http");
const server=http.createServer(function(req,res){
    res.end("hellooo");
})
server.listen(3000);

