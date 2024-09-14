export const ADD_NOTE = "ADD_NOTE";
export const UPDATE_NOTE = "UPDATE_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";
export const TOGGLE_NOTE = "TOGGLE_NOTE";

export const addNote = (note) => ({
  type: "ADD_NOTE",
  payload: note,
});

export const updateNote = (id, updateNote) => ({
  type: "UPDATE_NOTE",
  payload: { id, updateNote },
});

export const deleteNote = (id) => ({
  type: "DELETE_NOTE",
  payload: id,
});

export const toggleNote = (id) => ({
  type: "TOGGLE_NOTE",
  payload: id,
});
