const express = require("express");
const APIrouter = express.Router();
const mongoose = require("mongoose");
const Workout = require("../models/Workout")

APIrouter.get("/api/workouts", (req, res) => {
    Workout.find({})
        .then((workouts) => {
            res.json(workouts);
        })
        .catch(error => {
            res.json(error);
        })
});

APIrouter.get("/api/workouts/range", (req, res) => {
    Workout.find({})
        .then((workouts) => {
            res.json(workouts);
        })
        .catch(error => {
            res.json(error);
        });
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
    Workout.create(NewWorkout)
        .then(dbNewWorkout => {
            res.json(dbNewWorkout);
        })
        .catch(error => {
            res.json(error);
            console.log(error);
        });
});

module.exports = APIrouter;