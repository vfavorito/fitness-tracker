const express = require("express");
const APIrouter = express.Router();
const mongoose = require("mongoose");
const Workout = require("../models/Workout")

// grabbing all workout documents and sending them to the front to manipulate
APIrouter.get("/api/workouts", (req, res) => {
    Workout.find({})
        .then((workouts) => {
            res.json(workouts);
        })
        .catch(error => {
            res.json(error);
        })
});
// grabbing all workout documents and sending them to the front to manipulate
APIrouter.get("/api/workouts/range", (req, res) => {
    Workout.find({})
        .then((workouts) => {
            res.json(workouts);
        })
        .catch(error => {
            res.json(error);
        });
});
// receiving exercise data from the front via the body of a request 
// then finding the workout document that has the same id that is in our url (req.params)
// then updating that document with the data we recieved from the body of the request 
// then returning the updated document
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
// creating a new blank "Workout" document in the database
// then returning that new document
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