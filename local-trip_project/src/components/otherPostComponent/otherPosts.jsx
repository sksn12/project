import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "../otherPostComponent/otherposts.css";
// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";
import OtherPost from "./otherPost";
import OtherPostEmpty from "./otherPostEmpty";

SwiperCore.use([EffectCoverflow, Pagination]);

const OtherPosts = ({
  detailRender,
  Login,
  setOtherPostWrite,
  OtherPostWrite,
  postUploader,
  Change,
  like,
  admin_service,
  comment_service,
  setPostWrite,
  hasTagValue,
  setHashTagValue,
}) => {
  // 다른사람 post
  const [data, setData] = useState(false);
  const [pageNum, setPageNum] = useState(0);
  const [data2, setData2] = useState(false);
  let start = 0;
  useEffect(() => {
    async function xx() {
      // 강원도->강원  춘천시->춘천 (first === 2글자로 second === 마지막한글자빼기)
      if (hasTagValue) {
        setData2(hasTagValue.data.content);
      } else {
        const frist = Change.substring(0, 2);
        const second = OtherPostWrite.slice(0, -1);
        const content = await postUploader.postInquire(
          frist,
          second,
          Login,
          pageNum
        );
        setData(content.data.content);
      }
    }
    xx();
  }, [
    Change,
    Login,
    OtherPostWrite,
    postUploader,
    pageNum,
    hasTagValue,
    data2,
  ]);

  return (
    <>
      <Swiper
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        className="mySwiper"
        onReachEnd={() => {
          if (start > 0) {
            setPageNum(pageNum + 1);
          }

          start += 1;
        }}
        watchOverflow={true} // 슬라이드가 1개 일 때 pager, button 숨김 여부 설정
      >
        {(function () {
          // 서버에서 값을 가져오는중 => 로딩
          if (!data && !data2) {
            return <></>;
          }
          // 서버에서 값을 가져왔는데 데이터가 비어있는 경우 => 아무것도 없다는 페이지
          else if (data.length === 0) {
            return (
              <SwiperSlide>
                <OtherPostEmpty
                  setOtherPostWrite={setOtherPostWrite}
                  detailRender={detailRender}
                  setHashTagValue={setHashTagValue}
                />
              </SwiperSlide>
            );
          } else if (data.length > 0) {
            return data.map((e) => (
              <SwiperSlide key={e.createdAt}>
                <OtherPost
                  detailRender={detailRender}
                  setOtherPostWrite={setOtherPostWrite}
                  OtherPostWrite={OtherPostWrite}
                  Login={Login}
                  data={e}
                  like={like}
                  comment_service={comment_service}
                  admin_service={admin_service}
                  setPostWrite={setPostWrite}
                  hasTagValue={hasTagValue}
                  setHashTagValue={setHashTagValue}
                ></OtherPost>
              </SwiperSlide>
            ));
          } else if (data2.length > 0) {
            return data2.map((e) => (
              <SwiperSlide key={e.createdAt}>
                <OtherPost
                  detailRender={detailRender}
                  setOtherPostWrite={setOtherPostWrite}
                  OtherPostWrite={OtherPostWrite}
                  Login={Login}
                  data={e}
                  like={like}
                  comment_service={comment_service}
                  admin_service={admin_service}
                  setPostWrite={setPostWrite}
                  hasTagValue={hasTagValue}
                  setHashTagValue={setHashTagValue}
                ></OtherPost>
              </SwiperSlide>
            ));
          }
        })()}
        <SwiperSlide className="hiddenSwiper"></SwiperSlide>
      </Swiper>
    </>
  );
};

export default OtherPosts;
