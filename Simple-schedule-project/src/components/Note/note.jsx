import React, { useEffect, useRef, useState } from "react";
import styles from "../Note/note.module.css";
import NoteDelete from "./Note_delete/note_delete";
import NoteItem from "./Note_item/note_item";
const Note = ({ setNoteVis, NoteVis, NoteRepository, userId }) => {
  const [list, setList] = useState({});
  const inputRef = useRef();
  const day = NoteVis.day;
  const month = NoteVis.month;

  // 노트켜놓고 캘린더에서 다른 날짜를 클릭하면 할일 리스트 전체 초기화
  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = NoteRepository.syncCards(userId, month, day, (list) => {
      setList(list);
    });
    return () => {
      stopSync();
    };
  }, [day, userId, NoteRepository]);

  const onAdd = () => {
    if (inputRef.current.value === "") {
      return;
    }
    const updateList = {
      ...list,
      [Date.now()]: { content: inputRef.current.value },
    };
    setList(updateList);
    inputRef.current.value = "";
    NoteRepository.saveList(userId, updateList, month, day);
  };

  const onDelete = (id) => {
    const updated = { ...list };
    delete updated[id];
    setList(updated);
    NoteRepository.deleteList(userId, id, month, day);
  };

  const onPress = (e) => {
    if (e.key === "Enter") {
      onAdd();
    } else {
      return;
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <p className={styles.day}>{day}일</p>
        <NoteDelete setNoteVis={setNoteVis} />
      </header>
      <div className={styles.body}>
        <h4 className={styles.p}>* 오늘할일</h4>
        <ol className={styles.ol}>
          <NoteItem list={list} onDelete={onDelete} />
        </ol>
      </div>
      <footer className={styles.footer}>
        <input
          ref={inputRef}
          type="text"
          name="todolist"
          className={styles.input}
          onKeyPress={onPress}
        ></input>
        <button className={styles.add} onClick={onAdd}>
          +
        </button>
      </footer>
    </div>
  );
};

export default Note;
