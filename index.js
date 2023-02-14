const http = require('http');
const fs = require("fs");
const hostName = '127.0.0.1';
const PORT = process.env.PORT;

const handleReadFile = (filiName,statusCode,req,res)=>{
    fs.readFile(filiName,(err,data)=>{
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(data);
        res.end();
    });
}


const server = http.createServer((req,res)=>{
    if(req.url==="/"){
        handleReadFile("index.html",200,req,res);
    }
    else if(req.url==="/about"){
        handleReadFile("about.html",200,req,res);
    }
    else if(req.url==="/contract"){
        handleReadFile("contract.html",200,req,res);
    }
    else{
        handleReadFile("404.html",404,req,res);
    }
       
       
       
})
server.listen(PORT,hostName,()=>{
    console.log(`server is running at http://${hostName}:${PORT}`);
})