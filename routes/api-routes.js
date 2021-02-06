const express = require("express");
const APIrouter = express.Router();
const mongoose = require("mongoose");
const Workout = require("../models/Workout")

APIrouter.get("/api/workouts", (req, res) => {
    Workout.find().sort({ Day: -1 }).limit(1)
        .then((lastWorkout) => {
            res.json(lastWorkout);
        })
        .catch(error => {
            res.json(error);
        })
});

APIrouter.put("/api/workouts/:id", (req, res) => {
    exerciseData = req.body;
    Workout.findOneAndUpdate({ _id: mongoose.Types.ObjectId(req.params.id) }, { $push: { exercises: exerciseData } }, { new: true })
        .then(updatedb => {
            res.json(updatedb);
        })
        .catch(error => {
            console.log(error);
            res.json(error);
        });
});
APIrouter.post("/api/workouts", (req, res) => {
    const NewWorkout = new Workout();

    console.log("this is the apirouter post", NewWorkout);
    Workout.create(NewWorkout)
        .then(dbNewWorkout => {
            console.log("this is in the router", dbNewWorkout)
            res.json(dbNewWorkout);

        })
        .catch(error => {
            res.json(error);
            console.log(error);
        });
});

APIrouter.get("/api/workouts/range", (req, res) => {
    Workout.find({})
        .then((lastWorkout) => {
            res.json(lastWorkout);
        })
        .catch(error => {
            res.json(error);
        })
})

module.exports = APIrouter;