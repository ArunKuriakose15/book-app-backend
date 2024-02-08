const express=require("express")
const router=express.Router()
const bookModel=require("../model/bookModel")

router.post("/add",async(req,res)=>{
    let data=req.body
    let book=new bookModel(data)
    let result=await book.save()
    res.json({status:"success"})
})

router.get("/view",async(req,res)=>{
    let data=await bookModel.find()
    res.json(data)
})

router.post("/search",async(req,res)=>{
    let input=req.body
    let data=await bookModel.find(input)
    res.json(data)
})

module.exports=router