import { Router } from "express";

const router = Router();

const {
  renderNoteForm,
  createNewNote,
  renderNotes,
  renderEditForm,
  updateNote,
  deleteNote,
} = require("../controllers/notes.controller");

//New notes
router.get("/notes/add", renderNoteForm);

router.post("/notes/new-note", createNewNote);
//get all notes

router.get("/notes", renderNotes);

//edit notes

router.get("/notes/edit/:id", renderEditForm);

router.put("/notes/edit/:id", updateNote);

//delete note
router.delete("/notes/delete/:id", deleteNote);

export default router;
