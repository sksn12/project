import React from "react";
import Image from "./HeaderComponents/image";
import styles from "../Header/header.module.css";
import AreaTitle from "./HeaderComponents/areaTitle";
import KakaoLoginButton from "../button/KakaoLoginButton";
import MypageButton from "../button/mypageButton";
import SettingButton from "../button/settingButton";
import BackButton from "../button/backButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = ({
  Change,
  MyPageBtnVal,
  setMyPageBtnVal,
  setLogin,
  Login,
  SettingBtnVal,
  setSettingBtnVal,
  auth,
  profileService,
  Render,
  setHashTag,
}) => {
  const onHash = () => {
    setHashTag(true);
  };
  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <Image />
        <AreaTitle Change={Change} />

        {Change ? <BackButton Render={Render} /> : <></>}

        <div className={styles.buttons}>
          {MyPageBtnVal.Val || SettingBtnVal ? (
            <></>
          ) : (
            <>
              <button className={styles.search} onClick={onHash}>
                <FontAwesomeIcon
                  icon={faSearch}
                  size="2x"
                  color="white"
                ></FontAwesomeIcon>
              </button>
              <KakaoLoginButton Login={Login} setLogin={setLogin} auth={auth} />
              <MypageButton
                setMyPageBtnVal={setMyPageBtnVal}
                profileService={profileService}
                Login={Login}
              />
              <SettingButton setSettingBtnVal={setSettingBtnVal} />
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
