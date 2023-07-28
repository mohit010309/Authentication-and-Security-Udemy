const mongoose=require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/testnewDB");

const newSchema = {
    name:String,
    address:String
};

const newModel = mongoose.model("newmodel",newSchema);

const newData=new newModel({
    name:"Namit",
    address:"Allahabad"
});

newData.save().then(function(){
    console.log("data saved");
});