import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

const Ratings = ({ setPost, post }) => {
  const [rating, setRating] = useState(0); // rating이 별의갯수

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
    let new_post = { ...post };
    new_post.score = rate;
    setPost(new_post);
  };

  return (
    <>
      <Rating onClick={handleRating} ratingValue={rating} />
    </>
  );
};

export default Ratings;
