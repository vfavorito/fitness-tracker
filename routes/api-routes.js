const express = require("express");
const APIrouter = express.Router();
const mongoose = require("mongoose");
const Exercise = require("../models/Exercise");
const Workout = require("../models/Workout")

APIrouter.get("/api/workouts", (req,res) => {
    Workout.find().sort({createdAt:-1}).limit(1)
    .populate("exercises")
    // .then((lastWorkout) => {
    //     lastWorkout.getTotalDuration();
    // })
    .then((lastWorkout) =>{
        res.json(lastWorkout);
    })
    .catch(error => {
        res.json(error);
    })
})

APIrouter.put("/api/workouts/:id", (req, res) => {
    exerciseData = req.body;
    Exercise.create(exerciseData)
        .then((exercise) => Workout.findOneAndUpdate({_id: mongoose.Types.ObjectId(req.params.id)},{$push:{exercises:exercise._id}},{new: true}))
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

APIrouter.get("/api/workouts/range", (req,res) => {
    Workout.find({})
    .populate("exercises")
    .then((lastWorkout) =>{
        res.json(lastWorkout);
    })
    .catch(error => {
        res.json(error);
    })
})

module.exports = APIrouter;