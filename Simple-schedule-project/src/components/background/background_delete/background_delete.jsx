import React from "react";
import styles from "../background_delete/background_delete.module.css";
const BackgroundDelete = ({ setBackgroundVis }) => {
  const onClick = () => {
    setBackgroundVis(false);
  };
  return (
    <button className={styles.delete} onClick={onClick}>
      X
    </button>
  );
};

export default BackgroundDelete;
