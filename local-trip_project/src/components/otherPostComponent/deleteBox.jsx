import React from "react";
import styles from "../otherPostComponent/otherpost.module.css";
const DeleteBox = ({
  setConfi,
  admin_service,
  Login,
  postId,
  setOtherPostWrite,
}) => {
  const onNo = () => {
    setConfi(false);
  };
  const onYes = async () => {
    await admin_service.AdminPostDelete(Login, postId);
    setConfi(false);
    setOtherPostWrite(false);
  };
  return (
    <div className={styles.DeleteBox}>
      <h2 className={styles.DeleteBoxTitle}>
        [관리자] 권한으로 <br />
        정말 삭제 하시겠습니까?
      </h2>
      <div className={styles.DeleteBoxLine}></div>
      <div className={styles.DeleteBoxBtns}>
        <button className={styles.DeleteBoxNo} onClick={onNo}>
          No
        </button>
        <button className={styles.DeleteBoxYes} onClick={onYes}>
          Yes
        </button>
      </div>
    </div>
  );
};

export default DeleteBox;
