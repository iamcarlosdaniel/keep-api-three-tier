import Note from "../database/models/note.model.js";

const getAllMyNotes = async (userId) => {
  try {
    const allMyNotes = await Note.find({ user_id: userId });
    return allMyNotes;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getOneNote = async (noteId) => {
  try {
    const noteFound = await Note.findById(noteId).populate("user_id");

    if (!noteFound) {
      throw new Error("Note not found");
    }

    return noteFound;
  } catch (error) {
    throw new Error(error.message);
  }
};

const createNote = async (noteData, userId) => {
  try {
    const newNote = await Note({
      user_id: userId,
      ...noteData,
    });

    await newNote.save();

    return { message: "Note created successfully" };
  } catch (error) {
    throw new Error(error.message);
  }
};

const updateNote = async (noteId, noteData) => {
  try {
    const noteUpdated = await Note.findByIdAndUpdate(
      { _id: noteId },
      noteData,
      { new: true }
    );

    return { message: "Note updated successfully" };
  } catch (error) {
    throw new Error(error.message);
  }
};

const deleteNote = async (noteId) => {
  try {
    const noteDeleted = await Note.findByIdAndDelete(noteId);

    if (!noteDeleted) {
      throw new Error("Note not found");
    }

    return { message: "Note deleted successfully" };
  } catch (error) {
    throw new Error(error.message);
  }
};

export const noteService = {
  getAllMyNotes,
  getOneNote,
  createNote,
  updateNote,
  deleteNote,
};
