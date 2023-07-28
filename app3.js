const express=require('express');
const app=express();

app.listen(8080,function(){
    console.log("Server is running on port 8080");
});

app.get("/",function(req,res){
    res.send("Welcome to port 8080...");
});