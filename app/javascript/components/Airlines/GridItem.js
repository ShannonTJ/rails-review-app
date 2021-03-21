import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const GridItem = (props) => {
  return (
    <div className="card">
      <div className="logo">
        <img src={props.attributes.image_url} alt={props.attributes.name} />
      </div>
      <div className="name">{props.attributes.name}</div>
      <div className="score">{props.attributes.avg_score}</div>
      <div className="link">
        <Link to={`/airlines/${props.attributes.slug}`}>Show Details</Link>
      </div>
    </div>
  );
};

export default GridItem;
