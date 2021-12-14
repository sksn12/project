import React, { useState } from "react";
import styles from "../profile/profile.module.css";
import ProfileImage from "./profileComponent/Header/profile_image";
import ProfileInfo from "./profileComponent/Header/profile_info";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackspace } from "@fortawesome/free-solid-svg-icons";
import MyPageArea from "./profileComponent/middle/myPageArea";
import basicImage from "../../images/SummerBackground.png";

const Profile = ({
  setMyPageBtnVal,
  Login,
  MyPageBtnVal,
  profileService,
  setDetailChange,
  detailChange,
  PostWrite,
  setPostWrite,
  setPostInquiring,
  PostInquiring,
}) => {
  const [writingOrReading, setWritingOrReading] = useState(false);
  const [state, setState] = useState(false);

  const btnClick = () => {
    setMyPageBtnVal({ Val: false, data: null });
  };

  return (
    <div className={styles.profile}>
      <div className={styles.TotalHeader}>
        {Login.userId && MyPageBtnVal.data.backGroundImageUrl ? (
          <div className={styles.imgAlign}>
            <img
              src={`${MyPageBtnVal.data.backGroundImageUrl}`}
              className={styles.backgroundImg}
              alt="유저배경사진"
            ></img>
          </div>
        ) : (
          <div className={styles.imgAlign}>
            <img
              className={styles.backgroundImg}
              alt="유저배경기본사진"
              src={basicImage}
            />
          </div>
        )}

        <header className={styles.header}>
          <h1 className={styles.title}>MyPage</h1>
          <FontAwesomeIcon
            icon={faBackspace}
            onClick={btnClick}
            className={styles.deleteButton}
            size="3x"
          ></FontAwesomeIcon>
        </header>

        <section className={styles.profileHeader}>
          <ProfileImage
            Login={Login}
            MyPageBtnVal={MyPageBtnVal}
            profileService={profileService}
            setMyPageBtnVal={setMyPageBtnVal}
          />
          <ProfileInfo
            MyPageBtnVal={MyPageBtnVal}
            profileService={profileService}
            Login={Login}
            setMyPageBtnVal={setMyPageBtnVal}
            setState={setState}
            state={state}
          />
        </section>
      </div>
      <section className={styles.profileMiddle}>
        <MyPageArea
          setDetailChange={setDetailChange}
          detailChange={detailChange}
          setWritingOrReading={setWritingOrReading}
          writingOrReading={writingOrReading}
          PostWrite={PostWrite}
          setPostWrite={setPostWrite}
          setPostInquiring={setPostInquiring}
          PostInquiring={PostInquiring}
        />
      </section>
    </div>
  );
};

export default Profile;
