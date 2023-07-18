const express = require("express");
const app = express();
const PORT = 8000;
const cors = require("cors");
const axios = require("axios").default;
require("dotenv").config();
app.use(cors());
//leagues get
app.get("/leagues", (req, res) => {
  const options = {
    method: "GET",
    url: "https://api-nba-v1.p.rapidapi.com/leagues",
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_API_KEY,
      "X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com",
    },
  };
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      res.json(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
});
//Player get
app.get("/players", (req, res) => {
  const options = {
    method: "GET",
    url: "https://api-nba-v1.p.rapidapi.com/players",
    params: { season: "2021" },
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_API_KEY,
      "X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com",
    },
  };
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      res.json(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
});
//Line UP
app.get("/Lineup", (req, res) => {
  const options = {
    method: "GET",
    url: "https://api-nba-v1.p.rapidapi.com/players",
    params: {
      season: "2021",
    },
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_API_KEY,
      "X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      res.json(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
});
//Standings
app.get("/Standings", (req, res) => {
  const options = {
    method: "GET",
    url: "https://api-nba-v1.p.rapidapi.com/standings",
    params: {
      league: "standard",
      season: "2021",
    },
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_API_KEY,
      "X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      res.json(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
});
//Schedule
app.get("/Schedule", (req, res) => {
  const options = {
    method: "GET",
    url: "https://api-nba-v1.p.rapidapi.com/games",
    params: { season: "2021" },
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_API_KEY,
      "X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      res.json(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
});

app.listen(PORT, () => console.log("running on PORT " + PORT));
