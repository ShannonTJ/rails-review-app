import React, { useState, useEffect } from "react";
import GridItem from "./GridItem";
import axios from "axios";
import { Home, Header, Subheader, Grid } from "./AirlinesStyle";

const Airlines = () => {
  const [airlines, setAirlines] = useState([]);

  useEffect(() => {
    axios
      .get("/api/v1/airlines.json")
      .then((resp) => setAirlines(resp.data.data))
      .catch((resp) => console.log(resp));
  }, [airlines.length]);

  return (
    <Home>
      <Header>
        <h1>RubyReviews</h1>
        <Subheader>A React/Rails project.</Subheader>
      </Header>
      <Grid>
        {airlines.map((item) => (
          <GridItem key={item.attributes.name} attributes={item.attributes} />
        ))}
      </Grid>
    </Home>
  );
};

export default Airlines;
