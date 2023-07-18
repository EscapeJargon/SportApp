import React from "react";
import Mainlayout from "../layout/Mainlayout";
import { useEffect, useState } from "react";
function PlayerInfo() {
  const [players, setplayers] = useState([]);

  useEffect(() => {
    fetch("/players")
      .then((response) => response.json())
      .then((data) => {
        setplayers(data.response);
      });
  }, []);
  return (
    <Mainlayout>
      <h1>Players</h1>
      <ul>
        {players.map((play, i) => (
          <li key={i}>{play}</li>
        ))}
      </ul>
    </Mainlayout>
  );
}

export default PlayerInfo;
