import React from "react";

const Review = (props) => {
  const { title, score, description } = props.attributes;
  return (
    <div className="card">
      <div className="rating-container">
        <div className="rating-score">{score}</div>
      </div>
      <div className="title">{title}</div>
      <div className="description">{description}</div>
    </div>
  );
};

export default Review;
