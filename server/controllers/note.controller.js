import { noteService } from "../services/note.service.js";

const getAllMyNotes = async (req, res) => {
  try {
    const allMyNotes = await noteService.getAllMyNotes(req.user.id);
    res.send({ status: "OK", data: allMyNotes });
  } catch (error) {
    res.status(error?.status || 500).send({
      status: "FAILED",
      data: { error: [{ message: error.message || error }] },
    });
  }
};

const getOneNote = async (req, res) => {
  try {
    const noteFound = await noteService.getOneNote(req.params.id);

    res.status(200).send({ status: "OK", data: noteFound });
  } catch (error) {
    res.status(error?.status || 500).send({
      status: "FAILED",
      data: { error: [{ message: error.message || error }] },
    });
  }
};

const createNote = async (req, res) => {
  try {
    const newNote = await noteService.createNote(req.body, req.user.id);

    res.status(200).send({ status: "OK", data: newNote });
  } catch (error) {
    res.status(error?.status || 500).send({
      status: "FAILED",
      data: { error: [{ message: error.message || error }] },
    });
  }
};

const updateNote = async (req, res) => {
  try {
    const noteUpdated = await noteService.updateNote(req.params.id, req.body);

    res.status(200).send({ status: "OK", data: noteUpdated });
  } catch (error) {
    res.status(error?.status || 500).send({
      status: "FAILED",
      data: { error: [{ message: error.message || error }] },
    });
  }
};

const deleteNote = async (req, res) => {
  try {
    const noteDeleted = await noteService.deleteNote(req.params.id);

    res.status(200).send({ status: "OK", data: noteDeleted });
  } catch (error) {
    res.status(error?.status || 500).send({
      status: "FAILED",
      data: { error: [{ message: error.message || error }] },
    });
  }
};

export const noteController = {
  getAllMyNotes,
  getOneNote,
  createNote,
  updateNote,
  deleteNote,
};
