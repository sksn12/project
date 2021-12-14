import React from "react";
import styles from "../message/message.module.css";

const Message = ({ setMessage, message, admin_service, Login }) => {
  const onCancel = () => {
    setMessage(false);
  };

  // 다끝나고 멤버 삭제 한번 확인해보기
  const onDelete = async () => {
    await admin_service.MemeberDelete(Login, message);
    setMessage(false);
  };
  return (
    <div className={styles.container}>
      <div className={styles.middle}>
        <h1 className={styles.p}>안내</h1>
        <p className={styles.p}>
          회원탈퇴를 진행하시면 <br></br>다시 복구할 수 없습니다
        </p>
        <div className={styles.line}></div>
        <p className={styles.p2}>정말 탈퇴 하시겠습니까?</p>
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

export default Message;
