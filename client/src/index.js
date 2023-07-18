import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Leagues from "./pages/Leagues";
import Schedule from "./pages/Schedule";
import PlayerInfo from "./pages/PlayerInfo";
import LineUp from "./pages/LineUp";
import Standings from "./pages/Standings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "leagues",
    element: <Leagues />,
  },
  {
    path: "schedule",
    element: <Schedule />,
  },
  {
    path: "playerinfo",
    element: <PlayerInfo />,
  },
  {
    path: "lineup",
    element: <LineUp />,
  },
  {
    path: "standings",
    element: <Standings />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
