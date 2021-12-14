import React, { useState } from "react";
import DeleteButton from "../button/deleteButton";
import styles from "../writePostComponent/writePost.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Write from "./Write/write";
import ImageUploader from "./ImageUploader/imageUploader";
import Address from "./Address/address";
import Ratings from "./Rating/ratings";
import YesOrNo from "./yesOrNo/yesOrNo";

const WritePost = ({
  detailRender,
  Login,
  setPostWrite,
  PostWrite,
  postUploader,
  errorLogic,
  PostInquiring,
  setHashTagValue,
}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isAddress, setIsAddress] = useState("");
  const [imageUrl, setImageUrl] = useState([]);

  const [post, setPost] = useState({
    content: "",
    address: PostInquiring,
    score: "",
    isOpen: "",
    category: 1,
  });

  // 팝업창 열기
  const openPostCode = () => {
    setIsPopupOpen(true);
  };

  // 팝업창 닫기
  const closePostCode = () => {
    setIsPopupOpen(false);
  };

  // 확인 창
  const [popUp, setPopUp] = useState(false);

  const onPost = () => {
    setPopUp(true);
  };

  return (
    <>
      {isPopupOpen ? (
        <button className={styles.DeleteButton2} onClick={closePostCode}>
          <FontAwesomeIcon icon={faTimes} size="2x"></FontAwesomeIcon>
        </button>
      ) : (
        <></>
      )}

      {popUp ? (
        <YesOrNo
          setPopUp={setPopUp}
          popUp={popUp}
          setPost={setPost}
          post={post}
          postUploader={postUploader}
          Login={Login}
          imageUrl={imageUrl}
          errorLogic={errorLogic}
          setPostWrite={setPostWrite}
        />
      ) : (
        <></>
      )}
      <div className={styles.post}>
        {isPopupOpen ? (
          <Address
            closePostCode={closePostCode}
            setIsAddress={setIsAddress}
            setPost={setPost}
            post={post}
            errorLogic={errorLogic}
          />
        ) : (
          <></>
        )}
        <div className={styles.DeleteButton}>
          <div className={styles.btns}>
            <button className={styles.btn} onClick={openPostCode}>
              <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
            </button>
            <DeleteButton
              detailRender={detailRender}
              setPostWrite={setPostWrite}
              PostWrite={PostWrite}
              setHashTagValue={setHashTagValue}
            ></DeleteButton>
          </div>
          <div className={styles.title}>
            <p>{PostWrite}</p>
          </div>
        </div>
        <section className={styles.container}>
          <section className={styles.header}>
            <section className={styles.ImageUploader}>
              <ImageUploader setImageUrl={setImageUrl} imageUrl={imageUrl} />
            </section>
            <section className={styles.write}>
              <Write setPost={setPost} post={post} />
            </section>
          </section>
          <section className={styles.footer}>
            <section className={styles.footerLeft}></section>
            <section className={styles.footerRight}>
              <section className={styles.footerRightColum}>
                <div className={styles.ratings}>
                  <div>
                    <button className={styles.postBtn} onClick={onPost}>
                      post
                    </button>
                  </div>
                  <Ratings setPost={setPost} post={post} />
                </div>

                <div className={styles.address}>
                  <p className={styles.addressText}>{isAddress}</p>
                </div>
              </section>
            </section>
          </section>
        </section>
      </div>
    </>
  );
};

export default WritePost;
