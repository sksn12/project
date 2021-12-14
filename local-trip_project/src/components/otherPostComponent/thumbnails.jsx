import React from "react";
import styles from "../otherPostComponent/otherpost.module.css";
const Thumbnails = ({ thumbnail, imageCurrentNo }) => {
  let CurrentSelcetedImage = thumbnail.filter((e, v) => {
    return v === imageCurrentNo;
  });

  return (
    <img
      src={CurrentSelcetedImage[0].imageUrl}
      className={styles.thumbnail}
      alt="프로필사진"
    />
  );
};

export default Thumbnails;
