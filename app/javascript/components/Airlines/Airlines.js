import React, { useState, useEffect } from "react";
import GridItem from "./GridItem";
import axios from "axios";
import styled from "styled-components";

const Home = styled.div`
  text-align: center;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

const Header = styled.div`
  padding: 100px 100px 10px 100px;

  h1 {
    font-size: 42px;
  }
`;

const Subheader = styled.div`
  font-weight: 300;
  font-size: 26px;
`;

const Grid = styled.div``;

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
    <Home>
      <Header>
        <h1>RubyReviews</h1>
        <div className="subheader">A React/Rails project.</div>
      </Header>
      <div className="grid">{grid}</div>
    </Home>
  );
};

export default Airlines;
