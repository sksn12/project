import React, { memo } from "react";
import Travle from "../../../images/Travle.png";

import styles from "../header.module.css";
const Image = memo(() => {
  return <img src={Travle} alt="icon" className={styles.img} />;
});

export default Image;
