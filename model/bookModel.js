const mongoose=require("mongoose")
const bookSchema=mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        author:String,
        price:String,
        publisher:String
    }
)

module.exports=mongoose.model("patient",bookSchema)