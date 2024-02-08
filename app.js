const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const bookRoutes=require("./controllers/bookRouter")

const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://arun:arun123@cluster0.5bjnd.mongodb.net/bookDb?retryWrites=true&w=majority",
    { useNewUrlParser: true })

app.use("/api/book",bookRoutes)

app.listen(3001,()=>{
    console.log("Server running ...")
})