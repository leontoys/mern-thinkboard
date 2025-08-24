import mongoose from "mongoose"

//create schema
const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required : true
    },
    content: {
        type: String,
        required : true
    }
}, {
    timeStamps : true
})

//create model
const Note = mongoose.Model("Note", noteSchema)

export default Note
