import React from "react";
import styles from "../season/season.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSeedling,
  faSun,
  faCannabis,
  faSnowflake,
} from "@fortawesome/free-solid-svg-icons";
const Season = ({ onBackground }) => {
  return (
    <div className={styles.container}>
      <button
        className={`${styles.btn} ${styles.spring}`}
        onClick={() => {
          onBackground("spring");
        }}
      >
        <FontAwesomeIcon
          icon={faSeedling}
          color="green"
          size="2x"
        ></FontAwesomeIcon>
      </button>
      <button
        className={`${styles.btn} ${styles.summer}`}
        onClick={() => {
          onBackground("summer");
        }}
      >
        <FontAwesomeIcon
          icon={faSun}
          color="orange"
          size="2x"
        ></FontAwesomeIcon>
      </button>
      <button
        className={`${styles.btn} ${styles.fall}`}
        onClick={() => {
          onBackground("fall");
        }}
      >
        <FontAwesomeIcon
          icon={faCannabis}
          color="red"
          size="2x"
        ></FontAwesomeIcon>
      </button>
      <button
        className={`${styles.btn} ${styles.winter}`}
        onClick={() => {
          onBackground("winter");
        }}
      >
        <FontAwesomeIcon
          icon={faSnowflake}
          color="white"
          size="2x"
        ></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Season;
