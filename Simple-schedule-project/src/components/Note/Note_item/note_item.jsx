import React from "react";
import styles from "../Note_item/note_item.module.css";
import NoteItemDelete from "../Note_item_delete/note_item_delete";
const NoteItem = ({ list, onDelete }) => {
  return (
    <div>
      {Object.keys(list).map((key) => {
        return (
          <p className={styles.p}>
            {list[key].content}
            <NoteItemDelete key={key} onDelete={onDelete} id={key} />
          </p>
        );
      })}
    </div>
  );
};

export default NoteItem;
