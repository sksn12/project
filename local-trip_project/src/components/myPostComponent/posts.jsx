import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "./posts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

// import Swiper core and required modules
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper/core";
import Post from "./post";
import EmptyPost from "./EmptyPost/emptyPost";
import { useRef } from "react";

SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);

const Posts = ({
  detailRender,
  Login,
  setOtherPostWrite,
  OtherPostWrite,
  postUploader,
  errorLogic,
  detailChange,
  PostInquiring,
  setPostWrite,
  setDetailChange,
  like,
  comment_service,
  setHashTagValue,
}) => {
  let start = 0;
  const [data, setData] = useState(false);
  const [successDelete, setSuccessDelete] = useState(false);
  const [pageNum, setPageNum] = useState(0);
  const reff = useRef();
  //useEffect의 deps에 successDelete추가해서 게시글 삭제되면 useEffect가 다시 돌아가서 데이터를 새로받아옴
  useEffect(() => {
    if (typeof detailChange === "boolean") {
      postUploader.allMyPostInquire(Login, pageNum).then((content) => {
        if (content === "error") {
          window.alert("로그인 하세요!");
          setDetailChange(false);
        } else {
          setData(content.data.content);
        }
      });
    } else if (typeof detailChange === "string") {
      const frist = PostInquiring.first.substring(0, 2);
      const second = PostInquiring.second.slice(0, -1);
      postUploader.myPostInquire(frist, second, Login).then((content) => {
        if (content === "error") {
          window.alert("로그인 하세요!");
          setDetailChange(false);
        } else {
          setData(content.data.content);
        }
      });
    }
  }, [
    Login,
    postUploader,
    detailChange,
    PostInquiring,
    successDelete,
    setDetailChange,
    pageNum,
  ]);
  const onPageNum = () => {
    setPageNum(pageNum + 1);
  };
  return (
    <>
      <Swiper
        ref={reff}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={"auto"}
        watchOverflow={true} // 슬라이드가 1개 일 때 pager, button 숨김 여부 설정
        autoplay={{ delay: 2000 }} // disableOnInteraction: false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        onReachEnd={() => {
          if (start > 0) {
            setPageNum(pageNum + 1);
          }
          start += 1;
        }}
        className="mySwiper"
      >
        {(function () {
          // 서버에서 값을 가져오는중 => 로딩
          if (!data) {
            return <></>;
          }
          // 서버에서 값을 가져왔는데 데이터가 비어있는 경우 => 아무것도 없다는 페이지
          else if (data.length === 0) {
            return (
              <SwiperSlide>
                <EmptyPost
                  detailRender={detailRender}
                  setPostWrite={setPostWrite}
                  setOtherPostWrite={setOtherPostWrite}
                  setHashTagValue={setHashTagValue}
                />
              </SwiperSlide>
            );
          } else if (data.length > 0) {
            return data.map((e) => (
              <SwiperSlide key={e.createdAt}>
                <Post
                  detailRender={detailRender}
                  Login={Login}
                  setOtherPostWrite={setOtherPostWrite}
                  OtherPostWrite={OtherPostWrite}
                  postUploader={postUploader}
                  errorLogic={errorLogic}
                  data={e}
                  setSuccessDelete={setSuccessDelete}
                  like={like}
                  comment_service={comment_service}
                  setDetailChange={setDetailChange}
                  setHashTagValue={setHashTagValue}
                ></Post>
              </SwiperSlide>
            ));
          }
        })()}

        {/* 데이터 가져오는 중에 떠서 한번더 조건문 걸음 */}
        {(function () {
          if (data.length > 0) {
            return (
              <SwiperSlide className="hiddenSwiper">
                <button className="btn" onClick={onPageNum}>
                  <FontAwesomeIcon icon={faChevronRight} size="6x" />
                </button>
              </SwiperSlide>
            );
          }
        })()}
      </Swiper>
    </>
  );
};

export default Posts;
