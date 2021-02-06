const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    exercises: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Exercise"
        }
    ] 
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;