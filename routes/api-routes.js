const express = require("express");
const APIrouter = express.Router();
const mongoose = require("mongoose");
const Workout = require("../models/workout-model.js");

let currentWorkout;

APIrouter.put("/api/workouts/:id", (req, res) => {
    workoutData = req.body;
    console.log("this is the apirouter put currentworkout", currentWorkout);
    if (workoutData.type === "cardio") {
        Workout.findOneAndUpdate(
            {
                _id: mongoose.Types.ObjectId(currentWorkout)
            },
            {
                $set: {
                    type: workoutData.type,
                    name: workoutData.name,
                    duration: workoutData.duration,
                    distance: workoutData.distance
                }
            })
            .then(updatedb => {
                res.json(updatedb)
            })
            .catch(error => {
                res.json(error)
            });
    }
    else if (workoutData.type === "resistance") {
        Workout.updateOne(
            {
                _id: mongoose.Types.ObjectId(currentWorkout)
            },
            {
                type: workoutData.type,
                name: workoutData.name,
                weight: workoutData.weight,
                sets: workoutData.sets,
                reps: workoutData.reps,
                duration: workoutData.duration

            })
            .then(updatedb => {
                res.json(updatedb)
            })
            .catch(error => {
                res.json(error)
            });
    };
});

APIrouter.post("/api/workouts", (req, res) => {
    const NewWorkout = new Workout(req.body);
    currentWorkout = NewWorkout._id;

    console.log("this is the apirouter post", NewWorkout);
    Workout.create(NewWorkout)
        .then(dbNewWorkout => {
            res.json(dbNewWorkout);
            console.log(dbNewWorkout);
            console.log("we here")
        })
        .catch(error => {
            res.json(error);
            console.log(error);
        });
});

module.exports = APIrouter;