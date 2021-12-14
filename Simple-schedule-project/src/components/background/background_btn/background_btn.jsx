import React from "react";
import styles from "../background_btn/background_btn.module.css";
const BackgroundBtn = ({ setBackgroundVis, backgroundVis }) => {
  const onClick = () => {
    if (backgroundVis) {
      setBackgroundVis(false);
    } else {
      setBackgroundVis(true);
    }
  };
  return (
    <button className={styles.Btn} onClick={onClick}>
      background
    </button>
  );
};

export default BackgroundBtn;
