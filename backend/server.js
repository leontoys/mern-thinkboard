import express from "express"

const app = express()

app.get('/api/notes', (req, res) => {
    res.status(200).send('here are your notes')
})

app.listen(5001, () => {
    console.log('app listening on PORT 5001')
})