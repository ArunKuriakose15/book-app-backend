const express=require("express")
const router=express.Router()
const bookModel=require("../model/bookModel")

router.post("/add",async(req,res)=>{
    let data=req.body
    let book=new bookModel(data)
    let result=await book.save()
    res.json({status:"success"})
})

module.exports=router