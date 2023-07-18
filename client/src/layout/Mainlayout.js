import React from "react";
import Sidebar from "../Components/Sidebar";

function Mainlayout({ children }) {
  return (
    <div>
      <Sidebar></Sidebar>
      <div>{children}</div>
    </div>
  );
}

export default Mainlayout;
