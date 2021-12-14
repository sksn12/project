import React from "react";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const NonLike = ({
  stateLike,
  like,
  setStateLike,
  Login,
  postId,
  setCount,
  count,
}) => {
  const onClick = async () => {
    let Now_count = {
      GoodCount: count.GoodCount + 1,
      CommentCount: count.CommentCount,
    };
    setCount(Now_count);
    let result = await like.Pushlike(Login, postId);

    setStateLike(result.data.id);
  };
  return (
    <>
      <FontAwesomeIcon icon={faHeart} color="red" onClick={onClick} />
    </>
  );
};

export default NonLike;
