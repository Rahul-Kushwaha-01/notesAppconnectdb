const express = require("express");
const connectToDB = require("./src/db/db");
const noteModel = require("./src/models/note.model");


connectToDB()
const app = express();
app.use(express.json());

app.post("/notes",async(req,res)=>{
    const{title,content} = req.body
    console.log(title,content)

   await noteModel.create({
        title,content
    })

    res.json({
        message:"note create successfully"
    })
})

app.get("/notes",async(req,res)=>{
    const notes = await noteModel.find()

    res.json({
        message:"notes fetch successfully",
        notes
    })
})

app.delete("/notes/:id",async (req,res)=>{
    const noteId = req.params.id
    await noteModel.findOneAndDelete({
        _id : noteId
    })
    res.json({
        message:"note deleted"
    })
})

app.patch("/notes/:id",async(req,res)=>{

    const noteId = req.params.id
    const {title} = req.body

    await noteModel.findByIdAndUpdate({
        _id:noteId
    },{
        title:title
    })

    res.json({
        message:"notes updated"
    })

})

app.listen(3000,()=>{
    console.log("this server running on port 3000")
})