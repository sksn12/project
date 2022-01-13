import React from "react";
import Gnb from "../components/GNB/Gnb";
import Slide from "../components/Slide/Slide";
import styles from "../page/TotalPage.module.css";

const TotalPage = () => {
  return (
    <div className={styles.TotalPage}>
      <Gnb />
      <Slide />
    </div>
  );
};

export default TotalPage;
