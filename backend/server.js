import express from "express"

const app = express()

app.listen(5001, () => {
    console.log('app listening on PORT 5001')
})