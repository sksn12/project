import React, { useRef } from "react";
import styles from "../Header/profileHeaderComponent.module.css";
import BasisProfile from "../../../../images/BasisProfile.png";

const ProfileImage = ({
  setMyPageBtnVal,
  Login,
  MyPageBtnVal,
  profileService,
}) => {
  const InputRef = useRef();

  const onClick = (event) => {
    event.preventDefault();
    InputRef.current.click();
  };
  const onChange = async (event) => {
    const uploader = await profileService.profileImageChange(
      Login,
      event.target.files[0]
    );
    setMyPageBtnVal({ Val: true, data: uploader.data });
  };
  return (
    <div className={styles.container}>
      {Login.userId ? (
        <>
          <input
            className={styles.input}
            ref={InputRef}
            accept="image/*"
            name="profile"
            type="file"
            onChange={onChange}
          />
          <button className={styles.profileImg} onClick={onClick}>
            <img
              src={MyPageBtnVal.data.profileImageUrl}
              alt="profile"
              className={styles.profile}
            />
          </button>
        </>
      ) : (
        <div className={styles.profileBasic}>
          <img
            src={BasisProfile}
            alt="basis profile"
            className={styles.BasisProfile}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileImage;
