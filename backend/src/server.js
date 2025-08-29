import express from "express"
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js"
import dotenv from "dotenv"
import rateLimiter from "./middleware/rateLimiter.js"
import cors from "cors"
import path from "path"

dotenv.config()
const app = express()
const __dirname = path.resolve()
console.log(__dirname)
if (process.env.NODE_ENV!=="production") {
 app.use(cors()); 
}
app.use(express.json())
app.use(rateLimiter)
app.use('/api/notes', notesRoutes)

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/../frontend/dist")));
  app.get(/(.*)/, (req, res) => { //NOTE- app.get("*") doesn't work in node5 and above
    console.log("hello-world");
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}


connectDB().then(() => {
app.listen(process.env.PORT, () => {
  console.log(
    `app listening on http://localhost:${process.env.PORT}/api/notes`
  );
});  
})