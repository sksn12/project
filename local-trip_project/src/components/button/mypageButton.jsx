import React from "react";
import styles from "../button/button.module.css";

const MypageButton = ({ setMyPageBtnVal, profileService, Login }) => {
  const MyPage = async () => {
    const Info = await profileService.memberInfoInquire(Login);
    if (!Info) {
      setMyPageBtnVal({ Val: true, data: null });
    } else {
      setMyPageBtnVal({ Val: true, data: Info.data });
    }
  };
  return (
    <button className={styles.mypageButton} onClick={MyPage}>
      MyPage
    </button>
  );
};

export default MypageButton;
