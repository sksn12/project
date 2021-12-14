import React from "react";
import styles from "../Note_item_delete/note_item_delete.module.css";
const NoteItemDelete = ({ onDelete, id }) => {
  const onRender = () => {
    onDelete(id);
  };
  return (
    <button className={styles.delete} onClick={onRender}>
      X
    </button>
  );
};

export default NoteItemDelete;
