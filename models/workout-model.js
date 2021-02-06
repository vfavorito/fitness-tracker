const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  type: {
    type: String,
    trim: true,
  },

  name: {
    type: String,
    trim: true,
  },

  weight: {
    type: Number,
  },

  sets: {
    type: Number,
  },

  reps: {
    type: Number,
  },

  duration: {
    type: Number,
  },

  distance: {
    type: Number,
},

});

const Workout = mongoose.model("workouts", WorkoutSchema);

module.exports = Workout;