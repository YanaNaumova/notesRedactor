import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addNote, updateNote } from "../../redux/actions/noteActions";
import styles from "./styles.module.css";

function NoteForm({ addNote, updateNote, editingNote, setEditingNoteId }) {
  const [note, setNote] = useState({ title: "", content: "" });

  useEffect(() => {
    if (editingNote) {
      setNote(editingNote);
    }
  }, [editingNote]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote({
      ...note,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingNote) {
      updateNote(editingNote.id, note);
      setEditingNoteId(null);
    } else {
      addNote({
        ...note,
        id: new Date().getTime().toString(),
        completed: false,
      });
    }
    setNote({ title: "", content: "" });
  };
  return (
    <form onSubmit={handleSubmit} className={styles.noteForm}>
      <input
        type="text"
        name="title"
        value={note.title}
        onChange={handleChange}
        placeholder="title"
        required
      />
      <textarea
        name="content"
        value={note.content}
        onChange={handleChange}
        placeholder="Content"
        required
      />
      <button type="submit">{editingNote ? "Update Note" : "Add Note"}</button>
    </form>
  );
}

const mapStateToProps = (state, ownProps) => ({
  editingNote: state.find((note) => note.id === ownProps.editingNoteId),
});

const mapDispatchToProps = {
  addNote,
  updateNote,
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);
