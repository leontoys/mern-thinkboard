import express from "express"

const app = express()

app.get('/api/notes', (req, res) => {
    res.status(200).send('here are your notes')
})

app.post('/api/notes', () => {
    res.status(201).json({message:'note created successfully'})
})

app.put('/api/notes/:id', (req, res) => {
    res.status(200).json({message:'note updated successfully'})
})

app.delete('/api/notes/:id', (req, res) => {
    res.status(200).json({message:'note deleted successfully'})
})

app.listen(5001, () => {
    console.log('app listening on PORT 5001')
})