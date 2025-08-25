import express from "express"
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js"
import dotenv from "dotenv"
import rateLimiter from "./middleware/rateLimiter.js"

dotenv.config()
const app = express()
app.use(express.json())
app.use(rateLimiter)
app.use('/api/notes', notesRoutes)

connectDB().then(() => {
app.listen(process.env.PORT, () => {
  console.log(
    `app listening on http://localhost:${process.env.PORT}/api/notes`
  );
});  
})