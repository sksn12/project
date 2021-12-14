import styles from "../Comments/comments.module.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Comments = ({
  comments,
  setComments,
  comment_service,
  data,
  Login,
  count,
  setCount,
}) => {
  const onDelete = async (Id) => {
    await comment_service.DeleteComment(Login, Id);
    let result = await comment_service.InquireComments(Login, data);
    setComments(result.data.content);
    let Now_count = {
      GoodCount: count.GoodCount,
      CommentCount: count.CommentCount - 1,
    };
    setCount(Now_count);
  };

  if (comments) {
    return comments.map((e) => {
      return (
        <div className={styles.div} key={e.id}>
          <p
            className={styles.comment}
          >{`${e.memberDto.nickname} : ${e.content}`}</p>
          <button
            className={styles.btn}
            onClick={() => {
              onDelete(e.id);
            }}
          >
            <FontAwesomeIcon icon={faTrash} color="antiquewhite" />
          </button>
        </div>
      );
    });
  } else {
    return <></>;
  }
};

export default Comments;
