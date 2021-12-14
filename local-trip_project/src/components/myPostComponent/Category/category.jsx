import React from "react";
import styles from "../post.module.css";

const Category = ({ isCorrect, post, setPost }) => {
  const onChange = (event) => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    let new_post = { ...post };
    new_post.category.id = parseInt(event.currentTarget.value);
    setPost(new_post);
  };
  return (
    <>
      {isCorrect ? (
        <select className={styles.select} onChange={onChange}>
          <option value="1">관광지</option>
          <option value="2">맛집</option>
          <option value="3">숙소</option>
        </select>
      ) : (
        <p className={styles.footer_p_cartegory}>
          {`카테고리 : ${post.category.name}`}
        </p>
      )}
    </>
  );
};

export default Category;
