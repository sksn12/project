import React from "react";
import styles from "../message/message.module.css";

const DeleteMessage = ({
  setCartegoryDeleteMessage,
  cartegoryDeleteMessage,
  admin_service,
  setCartegory,
  Login,
}) => {
  const onCancel = () => {
    setCartegoryDeleteMessage(false);
  };

  // 다끝나고 멤버 삭제 한번 확인해보기
  const onDelete = async () => {
    await admin_service.CartegoryDelete(Login, cartegoryDeleteMessage);
    const result = await admin_service.CategroyInquire(Login);
    setCartegory(result);
    setCartegoryDeleteMessage(false);
  };
  return (
    <div className={styles.container}>
      <div className={styles.middle}>
        <h1 className={styles.p}>안내</h1>

        <div className={styles.line}></div>
        <p className={styles.p2}>정말 삭제 하시겠습니까?</p>
      </div>
      <div className={styles.footer}>
        <button className={styles.btns} onClick={onCancel}>
          취소
        </button>
        <button className={styles.btns} onClick={onDelete}>
          확인
        </button>
      </div>
    </div>
  );
};

export default DeleteMessage;
