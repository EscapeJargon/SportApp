import React from "react";
import Mainlayout from "../layout/Mainlayout";
import { useEffect, useState } from "react";
function Schedule() {
  const [schedules, setschedule] = useState([]);

  useEffect(() => {
    fetch("/schedules")
      .then((response) => response.json())
      .then((data) => {
        setschedule(data.response);
      });
  }, []);
  return (
    <Mainlayout>
      <h1>Schedules</h1>
      <ul>
        {schedules.map((sched, i) => (
          <li key={i}>{sched}</li>
        ))}
      </ul>
    </Mainlayout>
  );
}

export default Schedule;
