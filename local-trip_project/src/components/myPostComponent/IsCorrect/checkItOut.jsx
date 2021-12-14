import React from "react";
import styles from "../IsCorrect/checkItOut.module.css";

const CheckItOut = ({
  setBox,
  imageUrl,
  post,
  Login,
  postId,
  postUploader,
  fisrtImage,
  setDetailChange,
}) => {
  const onDelete = () => {
    setBox(false);
  };
  const onUpdate = async () => {
    // 이미지가 수정될때만 변경된 이미지 값도 서버에 넘겨줌
    if (fisrtImage !== imageUrl) {
      await postUploader.myPostImageUploader(postId, Login, imageUrl);
    }
    await postUploader.myPostUpdate(postId, Login, post);

    setBox(false);
    setDetailChange(false);
  };
  console.log(imageUrl);
  return (
    <div className={styles.container}>
      <section className={styles.middle}>
        <h1 className={styles.p}>안내</h1>
        <p className={styles.p}>수정하시겠습니까?</p>
        <div className={styles.line}></div>
        <div className={styles.btns}>
          <button className={styles.btn} onClick={onDelete}>
            취소
          </button>
          <button className={styles.btn} onClick={onUpdate}>
            확인
          </button>
        </div>
      </section>
    </div>
  );
};

export default CheckItOut;
