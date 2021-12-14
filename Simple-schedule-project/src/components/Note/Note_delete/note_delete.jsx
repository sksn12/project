import React from "react";
import styles from "../Note_delete/note_delete.module.css";
const NoteDelete = ({ setNoteVis }) => {
  const onClick = () => {
    setNoteVis({
      state: false,
      day: null,
      month: null,
    });
  };
  return (
    <button className={styles.delete} onClick={onClick}>
      X
    </button>
  );
};

export default NoteDelete;
