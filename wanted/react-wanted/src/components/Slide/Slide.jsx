import React from "react";
import styles from "../Slide/Slide.module.css";

const Slide = () => {
  return (
    <div className={styles.Slide}>
      <div className={styles.Slide_Track}>
        <button className={styles.Btn_pre}>&lt;</button>
        <div className={styles.Slide_List}>
          <div className={styles.Slide_Now}>
            <img
              src="https://static.wanted.co.kr/images/banners/1434/fdbbcb06.jpg"
              alt="img1"
              className={styles.Slide_Img}
            ></img>
            <div className={styles.Slide_Img_Message}>
              <div className={styles.Slide_Img_Message_Top}>
                <h3 className={styles.Slide_Img_Message_Top_H1}>
                  요즘 MD가 일하는 방법
                </h3>
                <p className={styles.Slide_Img_Message_Top_P}>
                  실무자가 공개하는 MD 커리어의 모든것
                </p>
              </div>
              <div className={styles.Slide_Img_Message_Line}></div>
              <div className={styles.Slide_Img_Message_Bottom}>
                <p className={styles.Slide_Img_Message_Bottom_P}>
                  바로가기 &gt;
                </p>
              </div>
            </div>
          </div>
        </div>
        <button className={styles.Btn_next}>&gt;</button>
      </div>
    </div>
  );
};

export default Slide;
