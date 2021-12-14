import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faChevronCircleLeft,
  faChevronCircleRight,
  faMinusCircle,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../ImageUploader/imageUploader.module.css";

// input에 file메소드가 안먹혔던 이유 : 크롬업데이트를 안해서!!!
// 여기 수정
const ImageUploader = ({ setImageUrl, imageUrl }) => {
  const InputRef = useRef();
  const [thumbnail, setThumbnail] = useState([]);
  const [imageCurrentNo, setImageCurrentNo] = useState(0);

  const onChange = (event) => {
    const nowSelcetImageList = event.target.files;
    const nowThumbnailList = [...thumbnail];
    for (let i = 0; i < nowSelcetImageList.length; i++) {
      const nowThumbnailUrl = URL.createObjectURL(nowSelcetImageList[i]);
      nowThumbnailList.push(nowThumbnailUrl);
    }

    setThumbnail(nowThumbnailList);
    setImageUrl(event.target.files);
  };

  const onClick = (event) => {
    event.preventDefault();
    InputRef.current.click();
  };

  const btnClickPrev = () => {
    if (imageCurrentNo === 0) {
      setImageCurrentNo(thumbnail.length - 1);
    } else {
      setImageCurrentNo(imageCurrentNo - 1);
    }
  };
  const btnClickNext = () => {
    if (imageCurrentNo >= thumbnail.length - 1) {
      setImageCurrentNo(0);
    } else {
      setImageCurrentNo(imageCurrentNo + 1);
    }
  };

  const onCurrentDelete = () => {
    let new_thumbnailList = [...thumbnail];
    new_thumbnailList.splice(imageCurrentNo, 1);
    setThumbnail(new_thumbnailList);
    setImageUrl(new_thumbnailList);
    if (imageCurrentNo === 0) {
      setImageCurrentNo(0);
    } else {
      setImageCurrentNo(imageCurrentNo - 1);
    }
  };

  const onAllDelete = () => {
    setThumbnail([]);
    setImageUrl([]);
  };

  return (
    <div className={styles.container}>
      {thumbnail.length > 0 ? (
        <>
          <div className={styles.spans}>
            <span>{imageCurrentNo + 1}</span>
            <span>/</span>
            <span>{thumbnail && thumbnail.length}</span>
          </div>

          <div className={styles.deleteBtns}>
            <input
              accept="image/*"
              type="file"
              multiple
              className={styles.input}
              ref={InputRef}
              onChange={onChange}
            />

            <div onClick={onClick} className={styles.deleteBtn}>
              <FontAwesomeIcon
                size="2x"
                icon={faPlusCircle}
                color="lightgray"
              />
            </div>

            <div
              className={styles.deleteBtn}
              title="현재사진삭제"
              onClick={onCurrentDelete}
            >
              <FontAwesomeIcon
                icon={faMinusCircle}
                size="2x"
                color="lightgray"
              ></FontAwesomeIcon>
            </div>
            <div
              className={styles.deleteBtn}
              title="전체사진삭제"
              onClick={onAllDelete}
            >
              <FontAwesomeIcon
                icon={faTrashAlt}
                size="2x"
                color="lightgray  "
              ></FontAwesomeIcon>
            </div>
          </div>

          <img
            src={thumbnail[imageCurrentNo]}
            className={styles.thumbnail}
            alt="프로필사진"
          />
          <div className={styles.Btns}>
            <button className={styles.buttonPrev} onClick={btnClickPrev}>
              <FontAwesomeIcon icon={faChevronCircleLeft} size="2x" />
            </button>
            <button className={styles.buttonNext} onClick={btnClickNext}>
              <FontAwesomeIcon icon={faChevronCircleRight} size="2x" />
            </button>
          </div>
        </>
      ) : (
        <>
          <input
            accept="image/*"
            type="file"
            multiple
            className={styles.input}
            ref={InputRef}
            onChange={onChange}
          />
          {/* 로그인이 되어있고 유저가 해당지역의 사진을 가지고 있으면 사진을 불러와야함 */}
          <button onClick={onClick} className={styles.btn}>
            <FontAwesomeIcon size="4x" icon={faPlusCircle} />
          </button>
        </>
      )}
    </div>
  );
};

export default ImageUploader;
