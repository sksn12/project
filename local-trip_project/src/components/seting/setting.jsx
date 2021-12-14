import React from "react";
import styles from "../seting/setting.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackspace } from "@fortawesome/free-solid-svg-icons";
import Season from "./season/season";
import { SketchPicker } from "react-color";

const Setting = ({ setSettingBtnVal, onBackground, color, setColor }) => {
  const btnClick = () => {
    setSettingBtnVal(false);
  };
  const onColor = (color) => {
    setColor(color.hex);
  };

  return (
    <div className={styles.setting}>
      <header className={styles.header}>
        <h1 className={styles.title}>Setting</h1>
        <FontAwesomeIcon
          icon={faBackspace}
          onClick={btnClick}
          className={styles.deleteButton}
          size="3x"
        ></FontAwesomeIcon>
      </header>
      <div className={styles.middle}>
        <h1 className={styles.chocie}>배경 계절 선택</h1>
        <Season onBackground={onBackground} />
        <h1 className={styles.chocie}>지도 색상 선택</h1>
        <SketchPicker onChangeComplete={onColor} color={color}></SketchPicker>
      </div>
    </div>
  );
};

export default Setting;
