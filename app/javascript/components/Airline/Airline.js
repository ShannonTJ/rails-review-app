import React, { useState, useEffect } from "react";
import axios from "axios";

const Airline = (props) => {
  const [airline, setAirline] = useState({});
  const [review, setReview] = useState({});

  useEffect(() => {
    const slug = props.match.params.slug;
    const url = `/api/v1/airlines/${slug}`;

    axios
      .get(url)
      .then((resp) => setAirline(resp.data))
      .catch((resp) => console.log(resp));
  }, []);

  return (
    <div className="wrapper">
      <div className="column">
        <div className="header"></div>
        <div className="reviews"></div>
      </div>
      <div className="column">
        <div className="review-form">review form</div>
      </div>
    </div>
  );
};

export default Airline;
