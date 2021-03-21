import React, { useState, useEffect } from "react";
import GridItem from "./GridItem";
import axios from "axios";

const Airlines = () => {
  const [airlines, setAirlines] = useState([]);

  useEffect(() => {
    //get all airlines from api
    //update airlines in our state
    axios
      .get("/api/v1/airlines.json")
      .then((resp) => {
        setAirlines(resp.data.data);
      })
      .catch((resp) => console.log(resp));
  }, [airlines.length]);

  const grid = airlines.map((item) => {
    return <GridItem key={item.attributes.name} attributes={item.attributes} />;
  });

  return (
    <div className="home">
      <div className="header">
        <h1>RubyReviews</h1>
        <div className="subheader">A React/Rails project.</div>
      </div>
      <div className="grid">{grid}</div>
    </div>
  );
};

export default Airlines;
