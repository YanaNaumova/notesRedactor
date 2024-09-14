import React, { useState } from "react";
import styles from "./styles.module.css";
import { connect } from "react-redux";
import NoteItem from "../NoteItem";
import NoteForm from "../NoteForm";

function NoteList({ notes }) {
  const [editingNoteId, setEditingNoteId] = useState(null);
  return (
    <div className={styles.noteList}>
      <NoteForm
        editingNoteId={editingNoteId}
        setEditingNoteId={setEditingNoteId}
      />
      {notes.map((note) => {
        return (
          <NoteItem
            key={note.id}
            note={note}
            setEditingNoteId={setEditingNoteId}
          />
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => ({
  notes: state,
});

export default connect(mapStateToProps)(NoteList);
