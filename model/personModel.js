const mongoose=require("mongoose")
const {Schema}=require("mongoose")
 let schema= new Schema({
    name:{
        type:String,
        require:true 

    },
    place:{
        type:String,
        require:true,
    },
    date:{
        type:String,
        require:true,
    },
});
module.exports=mongoose.model("person",schema);