import React from "react";
import styles from "../button/button.module.css";

const SettingButton = ({ setSettingBtnVal }) => {
  const btnClick = () => {
    setSettingBtnVal(true);
  };
  return (
    <button onClick={btnClick} className={styles.settingButton}>
      {"Setting"}
    </button>
  );
};

export default SettingButton;
