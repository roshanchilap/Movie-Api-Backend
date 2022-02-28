const express = require("express");
const { default: mongoose } = require("mongoose");
const Theatre = require("../models/theatre");
const router = express.Router();
const Screen = require("../models/screen");
//Adding movies to database
router.post("/addTheatre", async (req, res) => {
  const data = new Theatre(req.body);
  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// //Getting all the movies in database
// router.get("/getMovies/:tid", async (req, res) => {
//   try {
//     const movies = await Movie.where("runtime").equals(req.params.time);
//     res.send(movies);
//   } catch (error) {
//     res.send(error);
//   }
// });

router.get("/getTheatres", async (req, res) => {
  try {
    const theatres = await Theatre.find()
      .populate({
        path: "screens",
        populate: { path: "movie" },
      })
      .populate({
        path: "screens",
        populate: { path: "showTime" },
      });
    res.send(theatres);
  } catch (error) {
    res.send(error);
  }
});

// To delete movie using ID from database
router.delete("/deleteTheatre/:id", async (req, res) => {
  try {
    const movies = await Theatre.findByIdAndDelete(req.params.id);
    res.send(movies);
  } catch (error) {
    res.send(error);
  }
});

// Update movie details in database
router.put("/updateTheatre/:id", async (req, res) => {
  try {
    const updates = Object.keys(req.body);
    console.log(Object.keys(req.body));
    const theatres = await Theatre.findById(req.params.id);
    updates.forEach((update) => (theatres[update] = req.body[update]));
    await theatres.save();
    return !theatres ? res.sendStatus(404) : res.send(theatres);
  } catch (error) {
    res.send(error);
  }
});


router.put("/getTheatre/:id", async (req, res) => {
  try {
    // await Theatre.findOne({
    //   "screens.scid": req.body.screens,
    // });
    const movies = await Theatre.updateOne({
      _id: req.params.id,
      $push: { screens: req.body.screens },
    });
    res.send(movies);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
