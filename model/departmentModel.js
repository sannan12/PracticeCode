const mongoose=require("mongoose")
const {Schema}=require("mongoose")
 let schema= new Schema({
    rank:{
        type:String,
        require:true 

    },
    place:{
        type:String,
        require:true,
    },
    occupation:{
        type:String,
        require:true,
    },
});
module.exports=mongoose.model("department",schema);