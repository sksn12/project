import React from "react";
import styles from "../button/button.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo } from "@fortawesome/free-solid-svg-icons";
const BackButton = ({ Render }) => {
  const onClick = () => {
    Render(false);
  };

  return (
    <button className={styles.backbutton} onClick={onClick}>
      <FontAwesomeIcon icon={faUndo} size="2x" />
    </button>
  );
};

export default BackButton;
