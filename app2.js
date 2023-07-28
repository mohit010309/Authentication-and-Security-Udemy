const express=require('express');
const app=express();

app.listen(3000,function(){
    console.log("Server is running on port 3000");
});

app.get("/",function(req,res){
    res.send("Welcome to port 3000");
});