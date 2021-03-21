import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 50px 100px 50px 0;

  img {
    height: 50px;
    width: 50px;
    border-radius: 100%;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  h1 {
    font-size: 30px;
  }
`;

const TotalReviews = styled.div`
  font-size: 18px;
  padding: 10px 0;
`;

const TotalOutOf = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 10px 0;
`;

const Header = (props) => {
  const { name, image_url, avg_score } = props.attributes;
  const total = props.reviews.length;

  return (
    <div className="wrapper">
      <h1>
        <img src={image_url} alt={name} />
        {name}
      </h1>
      <div className="total-reviews">{total} User Reviews</div>
      <div className="rating"></div>
      <div className="total-out-of">{avg_score} out of 5</div>
    </div>
  );
};

export default Header;
