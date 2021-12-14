import React from "react";
import { useRef } from "react";
import styles from "../message/message.module.css";

const AddMessage = ({
  setCartegoryAddMessage,
  admin_service,
  Login,
  setCartegory,
}) => {
  const inputRef = useRef();
  const onCancel = () => {
    setCartegoryAddMessage(false);
  };
  const onAdd = async () => {
    if (inputRef.current.value === "") {
      return;
    }
    await admin_service.CartegoryAdd(Login, inputRef.current.value);
    const result = await admin_service.CategroyInquire(Login);
    setCartegory(result);
    setCartegoryAddMessage(false);
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
      <div className={styles.middle}>
        <h1 className={styles.p}>안내</h1>
        <input
          ref={inputRef}
          name="cartegoryAdd"
          className={styles.input}
          onKeyDown={onPress}
        ></input>
        <div className={styles.line}></div>
        <p className={styles.p}>카테고리를 추가 하시겠습니까?</p>
      </div>
      <div className={styles.footer}>
        <button className={styles.btns} onClick={onCancel}>
          취소
        </button>
        <button className={styles.btns} onClick={onAdd}>
          확인
        </button>
      </div>
    </div>
  );
};

export default AddMessage;
