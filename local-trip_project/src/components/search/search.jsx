import React from "react";
import styles from "../search/search.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

const Search = ({ setHashTag, hashTag, setHashTagValue, postUploader }) => {
  const inputRef = useRef();
  const onDelete = () => {
    setHashTag(false);
  };
  const onEnter = (e) => {
    if (e.key === "Enter") {
      onAdd();
    } else {
      return;
    }
  };
  const onAdd = async () => {
    const result = await postUploader.PostHashTagInquire(
      inputRef.current.value
    );
    if (result === "err") {
      alert("해당 해시태그로 작성된 글이 없습니다");
    } else {
      console.log(result);
      setHashTagValue(result);
    }
    setHashTag(false);
  };
  return (
    <div className={styles.container}>
      <div className={styles.Search}>
        <FontAwesomeIcon icon={faSearch} size="6x" />
      </div>
      <input
        className={styles.input}
        placeholder="Search..."
        ref={inputRef}
        onKeyPress={onEnter}
      ></input>
      <div className={styles.Search} onClick={onDelete}>
        <FontAwesomeIcon icon={faTimes} size="6x" />
      </div>
    </div>
  );
};

export default Search;
