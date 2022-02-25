const express = require("express");
const db = require("./db");
const app = express();

const addMovieRouter = require("./routes/movieRoute");
const theatreRoute = require("./routes/theatreRoute");
const showRoute = require("./routes/showRoute");
const screenRoute = require("./routes/screenRoute");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home page");
});

app.use("/movie", addMovieRouter);
app.use("/theatre", theatreRoute);
app.use("/show", showRoute);
app.use("/screen", screenRoute);

app.listen("3000", async (req, res) => {
  await console.log("Server is running on port 3000");
});
