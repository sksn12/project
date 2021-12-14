import React from "react";
import { useRef } from "react";
import styles from "../Comments/comments.module.css";
const InputBox = ({ comment_service, data, Login, setCount, count }) => {
  const InputRef = useRef();

  const onAdd = async () => {
    if (InputRef.current.value === "") {
      return;
    }
    await comment_service.AddComment(Login, data, InputRef.current.value);
    let Now_count = {
      GoodCount: count.GoodCount,
      CommentCount: count.CommentCount + 1,
    };
    setCount(Now_count);
    InputRef.current.value = "";
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onAdd();
    } else {
      return;
    }
  };
  return (
    <input
      className={styles.input_comment}
      placeholder="댓글달기..."
      onKeyPress={onKeyPress}
      ref={InputRef}
    ></input>
  );
};

export default InputBox;
