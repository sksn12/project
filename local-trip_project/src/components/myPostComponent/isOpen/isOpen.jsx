import React from "react";
import styles from "../post.module.css";
const IsOpen = ({ post, isCorrect, setPost }) => {
  const onChange = () => {
    let new_post = { ...post };
    if (post.isOpen) {
      new_post.isOpen = false;
      setPost(new_post);
    } else {
      new_post.isOpen = true;
      setPost(new_post);
    }
  };
  return (
    <>
      {isCorrect ? (
        <div className={styles.checkBox}>
          <label className={styles.label}>
            <input
              name="radio"
              type="radio"
              value="true"
              defaultChecked={post.isOpen}
              onChange={onChange}
            />
            공개
          </label>
          <label className={styles.label}>
            <input
              name="radio"
              type="radio"
              value="false"
              defaultChecked={!post.isOpen}
              onChange={onChange}
            />
            비공개
          </label>
        </div>
      ) : (
        <p className={styles.footer_p_cartegory}>
          {post.isOpen ? "공개여부 :  공개" : "공개여부 :  비공개"}
        </p>
      )}
    </>
  );
};

export default IsOpen;
