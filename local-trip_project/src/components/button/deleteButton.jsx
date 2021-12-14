import React from "react";
import styles from "../button/button.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
const DeleteButton2 = ({
  detailRender,
  setPostWrite,
  PostWrite,
  setHashTagValue,
}) => {
  const onClick = () => {
    if (PostWrite) {
      setPostWrite(false);
      setHashTagValue(false);
    } else {
      detailRender(false);
      setHashTagValue(false);
    }
  };

  return (
    <button className={styles.DeleteButton} onClick={onClick}>
      <FontAwesomeIcon icon={faTimes} className={styles.Times} size="2x" />
    </button>
  );
};

export default DeleteButton2;
