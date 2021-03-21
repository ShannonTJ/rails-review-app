import React from "react";

const GridItem = (props) => {
  return (
    <div className="card">
      <div className="logo">
        <img src={props.attributes.image_url} alt={props.attributes.name} />
      </div>
      <div className="name">{props.attributes.name}</div>
      <div className="score">{props.attributes.avg_score}</div>
      <div className="link">
        <a href={`/airlines/${props.attributes.slug}`}>Show Details</a>
      </div>
    </div>
  );
};

export default GridItem;
