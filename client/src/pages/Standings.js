import React from "react";
import Mainlayout from "../layout/Mainlayout";
import { useEffect, useState } from "react";
function Standings() {
  const [standings, setstandings] = useState([]);

  useEffect(() => {
    fetch("/standings")
      .then((response) => response.json())
      .then((data) => {
        setstandings(data.response);
      });
  }, []);
  return (
    <Mainlayout>
      <h1>Standings</h1>
      <ul>
        {standings.map((stand, i) => (
          <li key={i}>{stand}</li>
        ))}
      </ul>
    </Mainlayout>
  );
}

export default Standings;
