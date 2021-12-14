import React, { useRef } from "react";
import styles from "../Header/profileHeaderComponent.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faFileUpload } from "@fortawesome/free-solid-svg-icons";

const ProfileInfo = ({
  MyPageBtnVal,
  profileService,
  Login,
  setMyPageBtnVal,
  setState,
  state,
}) => {
  const inputRef = useRef();
  const InputRef2 = useRef();

  const onClick = async () => {
    if (state) {
      if (inputRef.current.value === "") {
        return;
      }
      const changeData = await profileService.profileNicknameChange(
        Login,
        inputRef.current.value
      );
      setMyPageBtnVal({ Val: true, data: changeData.data });
      setState(false);
    } else {
      setState(true);
    }
  };

  const onPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    } else {
      return;
    }
  };
  const onBackround = (event) => {
    event.preventDefault();
    InputRef2.current.click();
  };

  const onChange2 = async (event) => {
    const uploader = await profileService.profileBackgroundChange(
      Login,
      event.target.files[0]
    );
    setMyPageBtnVal({ Val: true, data: uploader.data });
  };

  return (
    <div className={styles.user}>
      <ol>
        {MyPageBtnVal.data ? (
          <>
            <div className={styles.div}>
              <p className={styles.NickName}>
                닉네임 :
                {state ? (
                  <input
                    ref={inputRef}
                    onKeyPress={onPress}
                    className={styles.inputxx}
                  ></input>
                ) : (
                  <>{MyPageBtnVal.data.nickname}</>
                )}
              </p>
              <button className={styles.nicknameBtn} onClick={onClick}>
                <FontAwesomeIcon icon={faPen} />
              </button>
              <button className={styles.nicknameBtn} onClick={onBackround}>
                <FontAwesomeIcon icon={faFileUpload} />
              </button>
              <input
                className={styles.input}
                ref={InputRef2}
                accept="image/*"
                name="profile2"
                type="file"
                onChange={onChange2}
              />
            </div>
            <p className={styles.id}>Id : {MyPageBtnVal.data.id}</p>
            <p className={styles.email}>Email : sksn12@naver.com</p>
          </>
        ) : (
          <>
            <p className={styles.NickName}>닉네임 : </p>
            <p className={styles.id}>Id : </p>
            <p className={styles.email}>Email : sksn12@naver.com</p>
          </>
        )}
      </ol>
    </div>
  );
};

export default ProfileInfo;
