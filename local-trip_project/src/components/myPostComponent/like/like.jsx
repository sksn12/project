import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// regular빈하트 solid찬하트
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Like = ({ like, setStateLike, Login, postId, setCount, count }) => {
  const onClick = async () => {
    let Now_count = {
      GoodCount: count.GoodCount - 1,
      CommentCount: count.CommentCount,
    };
    setCount(Now_count);
    await like.CancelLike(Login, postId);
    setStateLike(false);
  };

  return (
    <>
      <FontAwesomeIcon icon={faHeart} color="red" onClick={onClick} />
    </>
  );
};

export default Like;
