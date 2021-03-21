import React, { useState, useEffect } from "react";
import axios from "axios";

const Airlines = () => {
  const [airlines, setAirlines] = useState([]);

  useEffect(() => {
    //get all airlines from api
    //update airlines in our state
    axios
      .get("/api/v1/airlines.json")
      .then((resp) => console.log(resp))
      .catch((resp) => console.log(resp));
  }, [airlines.length]);

  return <h1>Airlines</h1>;
};

export default Airlines;
