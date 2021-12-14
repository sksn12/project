import React from "react";
import styles from "../header.module.css";

const AreaTitle = ({ Change }) => {
  return <>{Change ? <p className={styles.title}>● {Change}</p> : <></>}</>;
};

export default AreaTitle;
