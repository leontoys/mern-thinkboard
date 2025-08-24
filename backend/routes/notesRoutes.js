import express from 'express'

const router = express.Router()

router.get("/", (req, res) => {
  res.status(200).send("here are your notes");
});

router.post("/", () => {
  res.status(201).json({ message: "note created successfully" });
});

router.put("/:id", (req, res) => {
  res.status(200).json({ message: "note updated successfully" });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({ message: "note deleted successfully" });
});

export default router