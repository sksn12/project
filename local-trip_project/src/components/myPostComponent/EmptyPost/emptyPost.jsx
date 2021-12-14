import React from "react";
import DeleteButton from "../../button/deleteButton";
import styles from "../EmptyPost/emptyPost.module.css";
import Empty from "../../../images/Empty.png";

const EmptyPost = ({
  detailRender,
  setPostWrite,
  setOtherPostWrite,
  setHashTagValue,
}) => {
  const onClick = () => {
    setOtherPostWrite(false);
  };
  return (
    <>
      <div className={styles.post}>
        <div className={styles.DeleteButton} onClick={onClick}>
          <DeleteButton
            detailRender={detailRender}
            setPostWrite={setPostWrite}
            setHashTagValue={setHashTagValue}
          ></DeleteButton>
        </div>
        <section className={styles.container}>
          <h2 className={styles.h2}>이 페이지는 현재 게시글이 없습니다!</h2>
          <div className={styles.EmptyDiv}>
            <img src={Empty} alt="Empty" className={styles.img} />
          </div>
        </section>
      </div>
    </>
  );
};

export default EmptyPost;
