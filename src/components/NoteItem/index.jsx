import React from "react";
import { connect } from "react-redux";
import { deleteNote, toggleNote } from "../../redux/actions/noteActions";
import styles from "./styles.module.css";

function NoteItem({ note, deleteNote, toggleNote, setEditingNoteId }) {
  return (
    <div className={styles.noteItem}>
      <div
        style={{
          textDecoration: note.completed ? "line-through" : "none",
        }}
      >
        <h3>{note.title}</h3>
        <p>{note.content}</p>
      </div>
      <div className={styles.btn}>
        <button onClick={() => setEditingNoteId(note.id)}>Edit</button>
        <button onClick={() => deleteNote(note.id)}>Delete</button>
        <button onClick={() => toggleNote(note.id)}>Completed</button>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  deleteNote,
  toggleNote,
};

export default connect(null, mapDispatchToProps)(NoteItem);
