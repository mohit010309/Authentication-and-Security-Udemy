const mongoose=require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/testDB");

const testSchema = new mongoose.Schema({
    name:String
});

const testModel = mongoose.model("testc",testSchema,"testc");

// const schema = new mongoose.Schema(testSchema);
testSchema.post('save', function (doc) {
    console.log('this fired after a document was saved');
  });

const newTest = new testModel({
    name:"this is new string"
});

newTest.save().then(function(docs){
    console.log("this is message after saving");
});
  