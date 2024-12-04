import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
const apiKey = process.env.WEATHER_API_KEY; //environment variable for API key

app.use(
  cors({
    //bypasses security restrictions and allows connection flow from origin
    origin: ["http://localhost:3001"],
  })
);

//api call for locations from city searches
app.get("/api/locationData", async (req, res) => {
  const keyWord = req.query.q;
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${keyWord}&appid=${apiKey}`
  );
  const data = await response.json();
  res.json(data);
});

//api call for weather based on location
app.get("/api/weatherData", async (req, res) => {
  const lat = req.query.lat;
  const lon = req.query.lon;
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${keyWord}&appid=${apiKey}``https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`
  );
  const data = await response.json();
  res.json(data);
});

app.listen(3000, () => console.log("Server is running on port 3000")); //check to see if backend runs after startup
