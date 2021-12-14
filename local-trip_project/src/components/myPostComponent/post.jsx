import React, { useState } from "react";
import DeleteButton2 from "../button/deleteButton";
import styles from "../myPostComponent/post.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faMapMarkerAlt,
  faPen,
  faTrash,
  faTimes,
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";

// import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { RatingView } from "react-simple-star-rating";
import Like from "./like/like";
import NonLike from "./like/nonLike";
import Comments from "./Comments/comments";
import InputBox from "./Comments/inputBox";
import Ratings from "./Rating/ratings";
import Write from "../myPostComponent/Write/write";
import ImageUploader from "../myPostComponent/imageUploader/imageUploader";
import IsOpen from "./isOpen/isOpen";
import Category from "./Category/category";
import Address from "./Address/address";
import CheckItOut from "./IsCorrect/checkItOut";

const Post = ({
  detailRender,
  setPostWrite,
  PostWrite,
  setOtherPostWrite,
  OtherPostWrite,
  data,
  postUploader,
  Login,
  setSuccessDelete,
  like,
  setDetailChange,
  comment_service,
  setHashTagValue,
}) => {
  const year = data.createdAt.substring(0, 10);
  const [isCorrect, setIsCorrect] = useState(false);
  const [confirmation, setConfirmation] = useState(false);
  const [imageCurrentNo, setImageCurrentNo] = useState(0);
  const [stateLike, setStateLike] = useState(data.goodDto.id);
  const [comments, setComments] = useState(false);
  const [addressClick, setAddressClick] = useState(false);
  const [box, setBox] = useState(false);
  const [imageUrl, setImageUrl] = useState(data.imageDtoList);

  const [post, setPost] = useState({
    content: data.content,
    address: data.address,
    score: data.score,
    isOpen: data.isOpen,
    category: data.categoryDto,
  });

  const [count, setCount] = useState({
    GoodCount: data.countGood,
    CommentCount: data.countComment,
  });
  const onCorrect = () => {
    if (isCorrect) {
      // 수정 다시 눌렀을때
      setIsCorrect(false);
    } else {
      setIsCorrect(true);
    }
  };
  const onTrash = () => {
    if (confirmation) {
      setConfirmation(false);
    } else {
      setConfirmation(true);
    }
  };
  const onDelete = async () => {
    const x = await postUploader.myPostDelete(data.id, Login);
    setSuccessDelete(x);
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
  const onAddress = () => {
    // 편집키가 열렸을때
    if (isCorrect) {
      setAddressClick(true);
    } else {
      return;
    }
  };
  const onAdressDelete = () => {
    setAddressClick(false);
  };
  const onBox = () => {
    if (box) {
      setBox(false);
    } else {
      setBox(true);
    }
  };

  return (
    <div className={styles.total_container}>
      <div className={styles.post}>
        <div className={styles.DeleteButton}>
          <p className={styles.year}>{year}</p>
          <div className={styles.btns}>
            <button className={styles.correct} onClick={onCorrect}>
              <FontAwesomeIcon icon={faPen} size="2x" />
            </button>
            <button className={styles.correct} onClick={onTrash}>
              <FontAwesomeIcon icon={faTrash} size="2x" />
            </button>
            <DeleteButton2
              detailRender={detailRender}
              setPostWrite={setPostWrite}
              PostWrite={PostWrite}
              setOtherPostWrite={setOtherPostWrite}
              OtherPostWrite={OtherPostWrite}
              setStateLike={setStateLike}
              setHashTagValue={setHashTagValue}
            ></DeleteButton2>
          </div>
        </div>
        <section className={styles.container}>
          <section className={styles.header}>
            {isCorrect ? (
              <section className={styles.ImageUploader2}>
                <ImageUploader setImageUrl={setImageUrl} imageUrl={imageUrl} />
              </section>
            ) : (
              <section className={styles.ImageUploader}>
                {data.imageDtoList.length > 1 ? (
                  <>
                    <div className={styles.spans}>
                      <span>{imageCurrentNo + 1}</span>
                      <span>/</span>
                      <span>
                        {data.imageDtoList && data.imageDtoList.length}
                      </span>
                    </div>
                    <img
                      src={data.imageDtoList[imageCurrentNo].imageUrl}
                      className={styles.thumbnail}
                      alt="프로필사진"
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
                        <FontAwesomeIcon
                          icon={faChevronCircleRight}
                          size="2x"
                        />
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
            )}

            {/* 글 가져오기 */}
            <section className={styles.write}>
              <div className={styles.write_container}>
                <div className={styles.write_write}>
                  {isCorrect ? (
                    <Write setPost={setPost} post={post} />
                  ) : (
                    <p
                      className={styles.write_p}
                      // xss공격때문에 자동으로 태그는 문자열로 바꿔서 만들지만 그걸 무시해주는 내장함수
                      dangerouslySetInnerHTML={{ __html: data.content }}
                    ></p>
                  )}
                </div>
              </div>
            </section>
          </section>
          <section className={styles.footer}>
            <section className={styles.footerLeft}>
              <section className={styles.footerLeft_Left}>
                <div className={styles.ratings}>
                  <p className={styles.footer_p}>별점</p>
                  {isCorrect ? (
                    <Ratings post={post} setPost={setPost} />
                  ) : (
                    <RatingView ratingValue={data.score} size="1.3rem" />
                  )}
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
                <p
                  className={
                    isCorrect
                      ? styles.footer_p_address
                      : styles.footer_p_addressX
                  }
                  onClick={onAddress}
                >
                  {post.address}
                </p>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </section>
              <section className={styles.footerRight_cartegory}>
                <IsOpen post={post} isCorrect={isCorrect} setPost={setPost} />
              </section>
              <section className={styles.footerRight_cartegory}>
                <Category isCorrect={isCorrect} post={post} setPost={setPost} />
              </section>
              <section className={styles.footerRight_cartegory}>
                {isCorrect ? (
                  <button className={styles.checkitOut} onClick={onBox}>
                    수정
                  </button>
                ) : (
                  <></>
                )}
              </section>
            </section>
          </section>
        </section>
      </div>
      {addressClick ? (
        <div className={styles.address}>
          <button className={styles.deleteBtn} onClick={onAdressDelete}>
            <FontAwesomeIcon icon={faTimes} size="3x" />
          </button>
          <Address
            setAddressClick={setAddressClick}
            addressClick={addressClick}
            post={post}
            setPost={setPost}
          />
        </div>
      ) : (
        <></>
      )}
      {box ? (
        <CheckItOut
          setBox={setBox}
          post={post}
          imageUrl={imageUrl}
          Login={Login}
          postId={data.id}
          postUploader={postUploader}
          fisrtImage={data.imageDtoList}
          setDetailChange={setDetailChange}
        />
      ) : (
        <></>
      )}
      {confirmation ? (
        <div className={styles.confirmation}>
          <section className={styles.confirmation_mid}>
            <h1 className={styles.confirmation_title}>삭제 하시겠습니까?</h1>
            <div className={styles.confirmation_line}></div>
            <div className={styles.confirmation_btns}>
              <button className={styles.confirmation_btn} onClick={onTrash}>
                No
              </button>
              <button className={styles.confirmation_btn} onClick={onDelete}>
                Yes
              </button>
            </div>
          </section>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Post;
