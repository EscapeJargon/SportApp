import React from "react";
import Mainlayout from "../layout/Mainlayout";
import { useEffect, useState } from "react";
// const axios = require("axios").default;

function Leagues() {
  const [leagues, setleagues] = useState([]);

  useEffect(() => {
    fetch("/leagues")
      .then((response) => response.json())
      .then((data) => {
        setleagues(data.response);
      });
  }, []);

  return (
    <Mainlayout>
      <h1>List of Leagues</h1>
      <ul>
        {leagues.map((leag, i) => (
          <li key={i}>{leag}</li>
        ))}
      </ul>
    </Mainlayout>
  );
}

export default Leagues;
