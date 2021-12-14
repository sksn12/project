import React, { useState } from "react";
import DeleteButton2 from "../button/deleteButton";
import styles from "../otherPostComponent/otherpost.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faChevronCircleLeft,
  faChevronCircleRight,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
// regular빈하트 solid찬하트
import { RatingView } from "react-simple-star-rating";
import Thumbnails from "./thumbnails";
import Comments from "../myPostComponent/Comments/comments";
import InputBox from "../myPostComponent/Comments/inputBox";
import NonLike from "../myPostComponent/like/nonLike";
import Like from "../myPostComponent/like/like";
import DeleteBox from "./deleteBox";

const OtherPost = ({
  detailRender,
  setPostWrite,
  PostWrite,
  setOtherPostWrite,
  OtherPostWrite,
  data,
  like,
  comment_service,
  Login,
  setHashTagValue,
  admin_service,
}) => {
  const [imageCurrentNo, setImageCurrentNo] = useState(0);
  const [count, setCount] = useState({
    GoodCount: data.countGood,
    CommentCount: data.countComment,
  });
  const [stateLike, setStateLike] = useState(data.goodDto.id);
  const [comments, setComments] = useState(false);
  const [confi, setConfi] = useState(false);

  const onClick = () => {
    setOtherPostWrite(false);
  };
  const btnClickPrev = () => {
    if (imageCurrentNo === 0) {
      setImageCurrentNo(data.imageDtoList.length - 1);
    } else {
      setImageCurrentNo(imageCurrentNo - 1);
    }
  };
  const btnClickNext = () => {
    if (imageCurrentNo >= data.imageDtoList.length - 1) {
      setImageCurrentNo(0);
    } else {
      setImageCurrentNo(imageCurrentNo + 1);
    }
  };
  const onComments = async () => {
    if (comments) {
      setComments(false);
    } else {
      let result = await comment_service.InquireComments(Login, data);
      setComments(result.data.content);
    }
  };
  const onAdminDelete = () => {
    setConfi(true);
  };

  return (
    <>
      <div className={styles.post}>
        <div className={styles.DeleteButton}>
          <div className={styles.RealDeleteButton} onClick={onClick}>
            <DeleteButton2
              detailRender={detailRender}
              setPostWrite={setPostWrite}
              PostWrite={PostWrite}
              setOtherPostWrite={setOtherPostWrite}
              OtherPostWrite={OtherPostWrite}
              setHashTagValue={setHashTagValue}
            ></DeleteButton2>
          </div>
          {localStorage.getItem("admin") ? (
            <button className={styles.erase} onClick={onAdminDelete}>
              <FontAwesomeIcon icon={faTrash} size="2x" />
            </button>
          ) : (
            <></>
          )}
        </div>
        <section className={styles.container}>
          <section className={styles.header}>
            <section className={styles.ImageUploader}>
              {data.imageDtoList.length > 1 ? (
                <>
                  <div className={styles.spans}>
                    <span>{imageCurrentNo + 1}</span>
                    <span>/</span>
                    <span>{data.imageDtoList && data.imageDtoList.length}</span>
                  </div>
                  <Thumbnails
                    thumbnail={data.imageDtoList}
                    imageCurrentNo={imageCurrentNo}
                  />
                  <div className={styles.Btns}>
                    <button
                      className={styles.buttonPrev}
                      onClick={btnClickPrev}
                    >
                      <FontAwesomeIcon icon={faChevronCircleLeft} size="2x" />
                    </button>
                    <button
                      className={styles.buttonNext}
                      onClick={btnClickNext}
                    >
                      <FontAwesomeIcon icon={faChevronCircleRight} size="2x" />
                    </button>
                  </div>
                </>
              ) : (
                <img
                  src={data.imageDtoList[0].imageUrl}
                  key={data.imageDtoList[0].imageUrl}
                  className={styles.img}
                  alt="게시글 이미지"
                />
              )}
            </section>
            <section className={styles.write}>
              <div className={styles.write_container}>
                <div className={styles.write_write}>
                  <p
                    className={styles.write_p}
                    // xss공격때문에 자동으로 태그는 문자열로 바꿔서 만들지만 그걸 무시해주는 내장함수
                    dangerouslySetInnerHTML={{ __html: data.content }}
                  />
                </div>
              </div>
            </section>
          </section>
          <section className={styles.footer}>
            <section className={styles.footerLeft}>
              <section className={styles.footerLeft_Left}>
                <div className={styles.ratings}>
                  <p className={styles.footer_p}>별점</p>
                  <RatingView ratingValue={data.score} size="1.3rem" />
                </div>
              </section>
              <section className={styles.footerLeft_right}>
                <div className={styles.footerLeft_right_tag}>
                  {stateLike ? (
                    <Like
                      stateLike={stateLike}
                      like={like}
                      setStateLike={setStateLike}
                      Login={Login}
                      postId={stateLike}
                      setCount={setCount}
                      count={count}
                    />
                  ) : (
                    <NonLike
                      stateLike={stateLike}
                      like={like}
                      setStateLike={setStateLike}
                      Login={Login}
                      postId={data.id}
                      setCount={setCount}
                      count={count}
                    />
                  )}
                  <p className={styles.footer_p}>{`${count.GoodCount}개`}</p>
                  <p className={styles.footer_p}>좋아요</p>
                </div>
                <div
                  className={styles.footerLeft_right_tag}
                  onClick={onComments}
                >
                  {comments ? (
                    <p className={styles.footer_p}>접기</p>
                  ) : (
                    <p className={styles.footer_p}>모두보기</p>
                  )}

                  <p className={styles.footer_p}>{`${count.CommentCount}개`}</p>
                  <p className={styles.footer_p}>댓글</p>
                </div>
                <div className={styles.footerLeft_right_Input}>
                  {comments ? (
                    <Comments
                      comments={comments}
                      setComments={setComments}
                      comment_service={comment_service}
                      data={data}
                      Login={Login}
                      setCount={setCount}
                      count={count}
                    />
                  ) : (
                    <></>
                  )}
                </div>
                <div className={styles.footerLeft_right_tag}>
                  <InputBox
                    comment_service={comment_service}
                    Login={Login}
                    data={data}
                    setCount={setCount}
                    count={count}
                  />
                </div>
              </section>
            </section>
            <section className={styles.footerRight}>
              <section className={styles.footerRight_address}>
                <p className={styles.footer_p_address}>{data.address}</p>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </section>
              <section className={styles.footerRight_address}>
                <p className={styles.categoryName}>
                  카테고리 : {data.categoryDto.name}
                </p>
              </section>
            </section>
          </section>
        </section>
        <div className={styles.DivDeleteBox}>
          <div className={styles.DivDeleteBox2}>
            {confi ? (
              <DeleteBox
                setConfi={setConfi}
                admin_service={admin_service}
                Login={Login}
                postId={data.id}
                setOtherPostWrite={setOtherPostWrite}
              />
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default OtherPost;
