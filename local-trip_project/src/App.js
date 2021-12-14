import React, { useState, useEffect } from "react";
import styles from "./AppStyles.module.css";
import MainMap from "./components/Map/mainMap";
import DetailMap from "./components/Map/detailMap";
import Header from "./components/Header/header";
import Profile from "./components/profile/profile";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Setting from "./components/seting/setting";
import OtherPosts from "./components/otherPostComponent/otherPosts";
import WritePost from "./components/writePostComponent/wirtePost";
import Posts from "./components/myPostComponent/posts";
import Admin from "./components/adminPage/admin";
import Search from "./components/search/search";
import styled from "styled-components";
import { color } from "d3";

const width = window.screen.width;
const height = window.screen.height;

// 가변스타일링
const ViewBox = styled.svg`
  width: 100vw;
  height: 100%;
  position: absolute;
  fill: ${(props) => props.color || color};
`;

const App = ({
  auth,
  profileService,
  postUploader,
  errorLogic,
  like,
  comment_service,
  admin_service,
}) => {
  useEffect(() => {
    window.Kakao.init(`${process.env.REACT_APP_KAKAO_API_KEY}`);
    // console.log("카카오 api생성 초기에 딱 한번만");
  }, []);

  const [Login, setLogin] = useState({});
  //랜더링 될때마다 refresh token 확인
  useEffect(() => {
    const refresh = localStorage.getItem("refreshtoken");
    if (refresh) {
      auth.accessToken_rerendering(refresh).then((access) => {
        setLogin({ userId: access.headers.accesstoken });
      });
    }
  }, [auth]);

  // firstAddress
  const [Change, setChange] = useState(false);
  const Render = (data) => {
    setChange(data);
  };

  // 내 글 보기를 눌른 후 지역네임을 클릭하면 해당 지역값이 들어옴 (이변수가 ture가 되야 posts가나옴)
  const [detailChange, setDetailChange] = useState(false);
  const detailRender = (data) => {
    setDetailChange(data);
  };

  // 배경 opacity변경
  const getBrightness = (detailChange) => {
    if (detailChange) {
      return styles.containerBR;
    }
  };

  const [background, setBackground] = useState();
  const onBackground = (what_seasson) => {
    if (what_seasson === "spring") {
      setBackground(styles.spring);
    } else if (what_seasson === "summer") {
      return setBackground(styles.summer);
    } else if (what_seasson === "fall") {
      return setBackground(styles.fall);
    } else if (what_seasson === "winter") {
      return setBackground(styles.winter);
    }
  };

  const [MyPageBtnVal, setMyPageBtnVal] = useState({
    Val: false,
    data: null,
  });

  const [SettingBtnVal, setSettingBtnVal] = useState(false);
  const [PostWrite, setPostWrite] = useState(false);

  // secondAddress
  const [OtherPostWrite, setOtherPostWrite] = useState(false);

  // 글 작성할때 내 글 볼때 주소
  const [PostInquiring, setPostInquiring] = useState({
    first: "",
    second: "",
  });

  // 해시태그검색
  const [hashTag, setHashTag] = useState(false);
  // 검색한 해시태그값
  const [hasTagValue, setHashTagValue] = useState(false);
  // 색상
  const [color, setColor] = useState("#1b1b1b");
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {/* 제일마지막께 먹힘 */}

          <div
            className={`${styles.contianer} ${getBrightness(
              detailChange
            )} ${background}`}
          >
            {MyPageBtnVal.Val ? (
              <></>
            ) : (
              <Header
                Change={Change}
                setMyPageBtnVal={setMyPageBtnVal}
                MyPageBtnVal={MyPageBtnVal}
                SettingBtnVal={SettingBtnVal}
                setSettingBtnVal={setSettingBtnVal}
                Login={Login}
                setLogin={setLogin}
                auth={auth}
                profileService={profileService}
                Render={Render}
                setHashTag={setHashTag}
              ></Header>
            )}

            <ViewBox viewBox={`0 0 ${width} ${height}`} color={color}>
              {/* <svg className={styles.Svg} viewBox={`0 0 ${width} ${height}`}> */}
              {Change ? (
                <>
                  <DetailMap
                    Change={Change}
                    detailRender={detailRender}
                    Render={Render}
                    setOtherPostWrite={setOtherPostWrite}
                  />
                </>
              ) : (
                <MainMap Render={Render} Change={Change} />
              )}
              {/* </svg> */}
            </ViewBox>

            {OtherPostWrite || hasTagValue ? (
              <OtherPosts
                detailRender={detailRender}
                Login={Login}
                setOtherPostWrite={setOtherPostWrite}
                postUploader={postUploader}
                Change={Change}
                OtherPostWrite={OtherPostWrite}
                comment_service={comment_service}
                admin_service={admin_service}
                like={like}
                setPostWrite={setPostWrite}
                hasTagValue={hasTagValue}
                setHashTagValue={setHashTagValue}
              />
            ) : (
              <></>
            )}

            {PostWrite ? (
              <div className={styles.post}>
                <WritePost
                  detailRender={detailRender}
                  setPostWrite={setPostWrite}
                  PostWrite={PostWrite}
                  postUploader={postUploader}
                  Login={Login}
                  errorLogic={errorLogic}
                  PostInquiring={PostInquiring}
                  setHashTagValue={setHashTagValue}
                />
              </div>
            ) : (
              <></>
            )}
            {detailChange ? (
              <Posts
                detailRender={detailRender}
                setPostWrite={setPostWrite}
                PostWrite={PostWrite}
                postUploader={postUploader}
                errorLogic={errorLogic}
                Login={Login}
                detailChange={detailChange}
                PostInquiring={PostInquiring}
                setOtherPostWrite={setOtherPostWrite}
                setDetailChange={setDetailChange}
                like={like}
                comment_service={comment_service}
                setHashTagValue={setHashTagValue}
              />
            ) : (
              <></>
            )}
            {MyPageBtnVal.Val ? (
              <Profile
                setMyPageBtnVal={setMyPageBtnVal}
                Login={Login}
                MyPageBtnVal={MyPageBtnVal}
                profileService={profileService}
                setDetailChange={setDetailChange}
                detailChange={detailChange}
                PostWrite={PostWrite}
                setPostWrite={setPostWrite}
                setPostInquiring={setPostInquiring}
                PostInquiring={PostInquiring}
              />
            ) : (
              <></>
            )}
            {SettingBtnVal ? (
              <Setting
                setSettingBtnVal={setSettingBtnVal}
                onBackground={onBackground}
                setColor={setColor}
                color={color}
              />
            ) : (
              <></>
            )}

            {hashTag ? (
              <Search
                hashTag={hashTag}
                setHashTag={setHashTag}
                setHashTagValue={setHashTagValue}
                postUploader={postUploader}
              />
            ) : (
              <></>
            )}
          </div>
        </Route>
        <Route path="/admin">
          {localStorage.getItem("admin") ? (
            <Admin Login={Login} admin_service={admin_service} />
          ) : (
            <h2>관리자가 아닙니다</h2>
          )}
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
