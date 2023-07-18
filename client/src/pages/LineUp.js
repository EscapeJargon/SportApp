import React from "react";
import Mainlayout from "../layout/Mainlayout";
import { useEffect, useState } from "react";
function LineUp() {
  const [Lineups, setLineup] = useState([]);

  useEffect(() => {
    fetch("/Lineups")
      .then((response) => response.json())
      .then((data) => {
        setLineup(data.response);
      });
  }, []);
  return (
    <Mainlayout>
      <h1>Line Up</h1>
      <ul>
        {Lineups.map((line, i) => (
          <li key={i}>{line}</li>
        ))}
      </ul>
    </Mainlayout>
  );
}

export default LineUp;
