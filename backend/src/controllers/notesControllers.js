import Note from "../models/Note.js";

export const getAllNotes = async (req, res) => {
  try {
  const notes = await Note.find({});
  res.status(200).json(notes);
  } catch (error) {
    console.error('Error in getAllNotes', error)
    res.status(500).json({message:"Internal server error"})
  }
}

export const createNote = async (req,res) => {
  try {
    const { title, content } = req.body
    const note = new Note({ title, content })
    const savedNote = await note.save()
    res.status(200).json(savedNote)
  } catch (error) {
    console.error('Error in createNote', error)
    res.status(500).json({message:"Internal server error"})
  }
}

export const updateNote = async (req, res) => {
  try {
    const { title, content } = req.body
    const updatedNote = await Note.findByIdAndUpdate(
    req.params.id,{ title, content },{new:true})
    if (!updatedNote) res.status(404).json({ message: 'Note not found' })
    res.status(200).json(updatedNote)
  } catch (error) {
    console.error("Error in updateNote", error);
    res.status(500).json({ message: "Internal server error" });    
  }
}

export const deleteNote = (req, res) => {
  res.status(200).json({ message: "note deleted successfully" });
}