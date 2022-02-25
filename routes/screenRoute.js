const express = require("express");
const Screen = require("../models/screen");
const router = express.Router();

//Adding movies to database
router.post("/addScreen", async (req, res) => {
  const data = new Screen(req.body);
  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Getting all the movies in database
// router.get("/getMovies/:time", async (req, res) => {
//   try {
//     const movies = await Movie.where("runtime").equals(req.params.time);
//     res.send(movies);
//   } catch (error) {
//     res.send(error);
//   }
// });

router.get("/getScreens", async (req, res) => {
  try {
    const screen = await Screen.find();
    res.send(screen);
  } catch (error) {
    res.send(error);
  }
});

// To delete movie using ID from database
router.delete("/deleteScreen/:id", async (req, res) => {
  try {
    const screen = await Screen.findByIdAndDelete(req.params.id);
    res.send(screen);
  } catch (error) {
    res.send(error);
  }
});

// Update movie details in database
router.put("/updateScreen/:id", async (req, res) => {
  try {
    const updates = Object.keys(req.body);
    const screen = await Screen.findById(req.params.id);
    updates.forEach((update) => (screen[update] = req.body[update]));
    await screen.save();
    return !screen ? res.sendStatus(404) : res.send(screen);
  } catch (error) {
    res.send(error);
  }
});

//

//add theatre in movie
//get screen
router.put("/addShows/:tid", async (req, res) => {
  try {
    const result = await Screen.updateOne(
      { tid: req.params.tid },
      { $push: { showTime: req.body.showTime } }
    );
    console.log(result);
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
