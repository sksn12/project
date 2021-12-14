import React, { useState } from "react";
import styles from "../middle/myPageArea.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretRight,
  faToggleOff,
  faToggleOn,
} from "@fortawesome/free-solid-svg-icons";
import MyPageDetailArea from "./myPageDetailArea";

const MyPageArea = ({
  detailChange,
  setDetailChange,
  setWritingOrReading,
  writingOrReading,
  PostWrite,
  setPostWrite,
  setPostInquiring,
}) => {
  const [detailArea, setDetailArea] = useState();
  const onClick = (event) => {
    if (detailArea) {
      return setDetailArea();
    }
    setDetailArea(event.target.outerText);
  };

  // console.log(detailArea); 클릭한 지역네임
  const onTogle = () => {
    if (writingOrReading) {
      setWritingOrReading(false);
      setPostWrite(setPostWrite);
    } else {
      setWritingOrReading(true);
    }
  };
  const onAllView = () => {
    setDetailChange(true);
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {!writingOrReading ? (
          <>
            <h1 className={styles.title}>글쓰기</h1>
            <FontAwesomeIcon
              icon={faToggleOff}
              size="2x"
              className={styles.togle}
              onClick={onTogle}
            ></FontAwesomeIcon>
          </>
        ) : (
          <>
            <h1 className={styles.title}>내 글 보기</h1>
            <FontAwesomeIcon
              icon={faToggleOn}
              size="2x"
              className={styles.togle}
              onClick={onTogle}
            ></FontAwesomeIcon>
            <button className={styles.allWrite} onClick={onAllView}>
              <h1 className={styles.allWirte_title}>모든 글 보기</h1>
            </button>
          </>
        )}
      </div>
      <li className={styles.li}>
        {see.map((item) => {
          return (
            <div key={item}>
              <ol className={styles.ol} onClick={onClick}>
                <FontAwesomeIcon
                  icon={faCaretRight}
                  className={styles.CaretRight}
                  size="1x"
                />
                <p className={styles.p}>{item}</p>
              </ol>
              {detailArea === item ? (
                <MyPageDetailArea
                  detailArea={detailArea}
                  detailChange={detailChange}
                  setDetailChange={setDetailChange}
                  setWritingOrReading={setWritingOrReading}
                  writingOrReading={writingOrReading}
                  PostWrite={PostWrite}
                  setPostWrite={setPostWrite}
                  setPostInquiring={setPostInquiring}
                />
              ) : (
                <></>
              )}
            </div>
          );
        })}
      </li>
    </div>
  );
};
const see = [
  "강원도",
  "경기도",
  "경상남도",
  "경상북도",
  "대구광역시",
  "대전광역시",
  "부산광역시",
  "서울특별시",
  "세종특별자치시",
  "인천광역시",
  "전라남도",
  "전라북도",
  "제주특별자치도",
  "충청남도",
  "충청북도",
];
export default MyPageArea;
