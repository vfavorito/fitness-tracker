const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// mongoose schema for data structure
const WorkoutSchema = new Schema({
    exercises: [
        {
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
        },
    ],
    day: {
        type: Date,
        default: Date.now()
      },
},
{
    toJSON:{ virtuals: true } 
});

// mongoose virtual that will give all "Workout" objects a totalDuration property that is the sum of all the excercises durations in that object
WorkoutSchema.virtual("totalDuration").get(function () {
    const exerciseDurations = [];
    this.exercises.forEach(exercise => {
        exerciseDurations.push(exercise.duration);
    });
    if (exerciseDurations.length >= 1) {
        return exerciseDurations.reduce(function (prev, cur) {
            return prev + cur;
        });
    }
    else {
        return;
    };
});
const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;