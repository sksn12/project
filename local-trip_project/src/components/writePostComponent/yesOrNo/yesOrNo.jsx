import React from "react";
import styles from "../yesOrNo/yesOrNo.module.css";
const YesOrNo = ({
  setPopUp,
  postUploader,
  setPost,
  post,
  imageUrl,
  Login,
  setPostWrite,
  errorLogic,
}) => {
  const onDelete = () => {
    setPopUp(false);
  };

  const onChange = (event) => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    let new_post = { ...post };
    console.log(event.currentTarget.value);
    new_post.category = parseInt(event.currentTarget.value);
    setPost(new_post);
  };

  const onClick = (e) => {
    let new_post = { ...post };
    if (e.target.value === "true") {
      new_post.isOpen = true;
    } else if (e.target.value === "false") {
      new_post.isOpen = false;
    }
    setPost(new_post);
  };

  const onPost = async () => {
    const LoginVal = errorLogic.LoginVal(Login);
    const postVal = errorLogic.PostVal(post);

    // 로그인 안되있다면 (나중에 alert대신 메세지창 직접 구현)
    if (LoginVal) {
      window.alert("로그인하세요!");
    } else if (postVal.length > 0) {
      console.log(postVal);
      switch (postVal[0]) {
        case "content":
          window.alert("내용을 입력하세요!");
          break;
        case "address":
          window.alert("주소를 기입하세요!");
          break;
        case "score":
          window.alert("별점을 정해주세요!");
          break;
        case "isOpen":
          window.alert("공개여부를 결정해주세요!!");
          break;
        case "category":
          window.alert("카테고리를 결정해주세요!");
          break;
        default:
      }
    } else {
      await postUploader.createPost(imageUrl, post, Login);
      setPostWrite(false);
    }
    setPopUp(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.choiceBox}>
        <section className={styles.header}>
          <button className={styles.delete} onClick={onDelete}>
            X
          </button>
        </section>
        <section className={styles.middle}>
          <div className={styles.category}>
            <h2 className={styles.categoryTitle}>카테고리</h2>
            <select className={styles.select} onChange={onChange}>
              <option value="1">관광지</option>
              <option value="2">맛집</option>
              <option value="3">숙소</option>
            </select>
          </div>
          <div className={styles.category}>
            <h2 className={styles.categoryTitle}>공개여부</h2>
            <div className={styles.checkBox}>
              <label>
                <input
                  name="radio"
                  type="radio"
                  value="true"
                  onClick={onClick}
                />
                공개
              </label>
              <label>
                <input
                  name="radio"
                  type="radio"
                  value="false"
                  onClick={onClick}
                />
                비공개
              </label>
            </div>
          </div>
          <div className={styles.category}>
            <button className={styles.finalBtn} onClick={onPost}>
              글쓰기
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default YesOrNo;
